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
import { useDispatch, useSelector } from "react-redux";
import NewLink from "../components/NewLink";
import CheckoutButton from "../components/CheckoutButton";
import { useEffect, useRef } from "react";
import { updateCart } from "../redux/apiCalls";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isMounted = useRef(false);
  const userId = useSelector((state) => state.user.currentUser._id);
  const TOKEN = useSelector((state) => state.user.currentUser.accessToken);

  useEffect(() => {
    if (isMounted.current) {
      updateCart(dispatch, cart, TOKEN, userId);
    } else {
      isMounted.current = true;
    }
  }, [cart.products.length]);

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
