import { useState } from "react";
import { Navigate } from "react-router";
import { publicRequest } from "../requestMethods";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from "../styledComponents/Register.style";
import { Error, Link } from "./Login";
import NewLink from "../components/NewLink";
const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isError, setIsError] = useState(null);
  const [credentials, SetCredentials] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  // validation
  const isValid = () => {
    if (credentials.first_name === "") setIsError("Please Enter Firstname ");
    else if (credentials.username === "") setIsError("Please Enter username");
    else if (credentials.last_name === "") setIsError("Please Enter Lastname ");
    else if (credentials.email === "") setIsError("Please Enter email ");
    else if (credentials.password === "") setIsError("Please Enter Password");
    else if (credentials.confirm_password === "")
      setIsError("Please Enter Confirm Password");
    else if (credentials.password !== credentials.confirm_password)
      setIsError("Password does not match");
    else setIsError(false);
  };

  //handle changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetCredentials({ ...credentials, [name]: value });
  };

  // onclick create button
  const handleClick = async (e) => {
    e.preventDefault();
    isValid();
    if (!isError) {
      try {
        await publicRequest.post("/auth/register", credentials);
        setIsRegistered(true);
      } catch (err) {
        console.log("Something went wrong");
      }
    }
  };

  if (isRegistered) return <Navigate to="/login" />;
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            name="first_name"
            placeholder="First name"
            value={credentials.first_name}
            onChange={handleChange}
          />
          <Input
            name="last_name"
            value={credentials.last_name}
            placeholder="Last name"
            onChange={handleChange}
          />
          <Input
            name="username"
            value={credentials.username}
            placeholder="username"
            onChange={handleChange}
          />
          <Input name="email" placeholder="email" onChange={handleChange} />
          <Input
            name="password"
            value={credentials.password}
            placeholder="password"
            type="password"
            onChange={handleChange}
          />
          <Input
            name="confirm_password"
            value={credentials.confirm_password}
            placeholder="confirm password"
            type="password"
            onChange={handleChange}
          />
          <Error>{isError}</Error>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <Button onClick={handleClick}>CREATE</Button>
          <NewLink to="/login">
            <Link>ALREADY HAVE AN ACCOUNT ? PLEASE LOGIN</Link>
          </NewLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
