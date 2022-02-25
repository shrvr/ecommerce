import styled from "styled-components";
import { mobile } from "../responsive";

export const Container = styled.div`
  height: 10%;
  width: 100%;
  /* ${mobile({ height: "20%" })} */
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  ${mobile({ width: "30px", fontSize: "60%" })}
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0;
  ${mobile({ fontSize: "100%" })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 5%;

  ${mobile({ fontSize: "5px", marginLeft: "15%", marginRight: "10%" })}
`;
