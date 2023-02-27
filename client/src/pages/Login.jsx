import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import styled from "styled-components";
import {
  Container,
  Title,
  Input,
  Button,
  WrapperRight,
  Wrapper,
  WrapperLeft,
  FormWrapper,
  LogoWrapper,
} from "../styledComponents/Register.style";
import NewLink from "../components/NewLink";
import MainLogo from "../components/MainLogo";

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

export const Disclaimer = styled.span`
  margin-top: 10px;
  font-size: 14px;
  border: 1px solid;
  border-color: black;
  padding: 5px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [err, setError] = useState(false);
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    setError(error);
  };

  return (
    <Container>
      <LogoWrapper>
        <MainLogo></MainLogo>
      </LogoWrapper>
      <Wrapper>
        <WrapperLeft></WrapperLeft>
        <WrapperRight>
          <FormWrapper>
            <Title>SIGN IN</Title>
            <Form>
              <Input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              {err &&  <Error>Something went wrong !!</Error>}

              <Disclaimer>
                <i>
                  <b>Disclaimer:</b> This website is for Educational purpose
                  only, not for business.
                  <br /><br/>
                  <b>To test the website</b>, use the following combination:
                  <br />
                  username:<b>shurvir</b> <br />
                  password:<b>12345678</b>
                </i>
              </Disclaimer>
              <Button onClick={handleClick} disabled={isFetching}>
                LOGIN
              </Button>
              <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
              <NewLink to="/register">
                <Link>CREATE A NEW ACCOUNT</Link>
              </NewLink>
            </Form>
          </FormWrapper>
        </WrapperRight>
      </Wrapper>
    </Container>
  );
};

export default Login;
