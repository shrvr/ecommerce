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
import { Link } from "./Login";
import NewLink from "../components/NewLink";
const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [credentials, SetCredentials] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetCredentials({ ...credentials, [name]: value });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post("/auth/register", credentials);
      setIsRegistered(true);
    } catch (err) {
      console.log("Something went wrong");
    }
  };

  if (isRegistered) return <Navigate to="/login" />;
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        {credentials.first_name}
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
