import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import styled from "styled-components";
import {
  Container,
  Wrapper,
  Title,
  Input,
  Button,
} from "../styledComponents/Register.style";
import NewLink from "../components/NewLink";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  font-size: 12px;
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Error>Something went wrong !!</Error>}
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <NewLink to="/register">
            <Link>CREATE A NEW ACCOUNT</Link>
          </NewLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
