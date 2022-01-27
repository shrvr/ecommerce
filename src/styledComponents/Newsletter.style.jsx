import styled from "styled-components";
import { mobile } from "../responsive";

export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 72px;
  margin-bottom: 20px;
`;
export const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
