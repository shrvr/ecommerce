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
} from "../styledComponents/Cart.style";
import CheckoutSummary from "../components/CheckoutSummary";
import { useSelector } from "react-redux";
import NewLink from "../components/NewLink";
import CheckoutButton from "../components/CheckoutButton";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <NewLink to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </NewLink>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <CheckoutButton />
        </Top>
        <Bottom>
          <Info>
            {cart.products?.map((product) => (
              <CartProductInfo product={product} key={product._id} />
            ))}
          </Info>
          <CheckoutSummary />
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
