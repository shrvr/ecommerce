import styled from "styled-components";
import { mobile, tablet } from "../responsive";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: row;
  padding: 0;
  margin: 0;
  ${mobile({ height: "40vh" })}
  ${tablet({ height: "50vh" })}
`;

export const Arrow = styled.div`
  width: 5%;
  height: 10%;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  background-color: #${(props) => props.bg};
`;

export const ImgContainer = styled.div`
  width: 50%;
  margin-left: 10%;
  display: flex;
`;
export const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  margin-right: 10%;
  ${mobile({ paddingTop: "6%", marginLeft: "5%" })};
`;

export const Title = styled.h1`
  font-size: 400%;
  ${mobile({ fontSize: "100%" })};
  ${tablet({ fontSize: "200%" })};
`;
export const Desc = styled.p`
  font-size: 150%;
  font-weight: 500%;
  letter-spacing: 3px;
  ${mobile({ fontSize: "70%" })};
  ${tablet({ fontSize: "100%" })};
`;
export const Button = styled.button`
  padding: 2%;
  font-size: 130%;
  background-color: transparent;
  cursor: pointer;
  ${mobile({ fontSize: "70%" })};
  ${tablet({ fontSize: "90%" })};
`;

export const Image = styled.img`
  height: 80%;
  ${mobile({ height: "40%" })};
  ${tablet({ height: "50%" })}
`;
