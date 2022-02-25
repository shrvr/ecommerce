import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 90%;
  ${mobile({ fontSize: "60%" })}
`;
const Left = styled.h1`
  margin: 0;
  color: black;
`;
const Right = styled.h1`
  color: #8b324d;
  margin: 0;
`;
const MainLogo = () => {
  return (
    <Container>
      <Left>FASHION</Left>
      <Right>_POINT</Right>
    </Container>
  );
};

export default MainLogo;
