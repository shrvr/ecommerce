const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    products: [
      {
        productId: {
          type: String,
        },
        title: { type: String },
        img: { type: String },
        color: {
          type: String,
        },
        size: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number,
        },
      },
    ],
    total: { type: Number },
    totalQuantity: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
