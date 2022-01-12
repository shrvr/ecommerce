import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartProductInfo from "../components/CartProductInfo";
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Hr,
} from "../styledComponents/Cart.style";
import CheckoutSummary from "../components/CheckoutSummary";

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <CartProductInfo />
            <Hr />
            <CartProductInfo />
            <Hr />
          </Info>
          <CheckoutSummary />
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
