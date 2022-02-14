const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await (
    await bcrypt.hash(req.body.password, salt)
  ).toString();
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPass,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser.username);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const match = await bcrypt.compare(req.body.password, user.password);
      if (match) {
        const accessToken = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SEC,
          { expiresIn: "3d" }
        );
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
      } else {
        res.status(401).json("Wrong Password");
      }
    } else {
      res.status(401).json("User not found");
    }
  } catch (err) {
    res.status(500).json("error");
  }
});

module.exports = router;
