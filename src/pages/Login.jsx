import styled from "styled-components";
import {
  Container,
  Wrapper,
  Title,
  Input,
  Button,
} from "../styledComponents/Register.style";

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

const Login = () => {
  return (
    <Container>
      <Wrapper style={{ width: "25%" }}>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
