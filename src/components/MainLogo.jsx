import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  font-weight: bold;
  ${mobile({ fontSize: "9px" })}
`;
const Left = styled.h1`
  margin: 0;
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
