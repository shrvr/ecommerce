import styled from "styled-components";
import { mobile } from "../responsive";
import { loginImage } from "../data";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${loginImage}) center;
  background-size: cover;
`;

export const LogoWrapper = styled.div`
  background-color: transparent;
  padding-top: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 90%;
`;

export const WrapperRight = styled.div`
  width: 50%;
  justify-content: center;
  display: flex;
  align-items: center;
  ${mobile({ width: "100%" })}
`;

export const FormWrapper = styled.div`
  width: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 25px;
  padding: 20px;
  margin: 20px;
  ${mobile({ width: "100%" })}
`;

export const WrapperLeft = styled.div`
  width: 50%;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 10px 0px;
  padding: 10px;
  background-color: inherit;
`;
export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
`;
