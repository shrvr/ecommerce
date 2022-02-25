import styled from "styled-components";
import { mobile } from "../responsive";

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  min-width: 280px;
  align-items: center;
  justify-content: center;
  position: relative;
  ${mobile({ height: "50vh" })}
  background-color: rgb(121,121,121);
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
`;
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
