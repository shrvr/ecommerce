import styled from "styled-components";
import { mobile } from "../responsive";

export const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
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

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
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
  ${mobile({ width: "50px" })}
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: 2 })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "9px", marginLeft: "5px" })}
`;
