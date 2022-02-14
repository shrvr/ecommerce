import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";
import { userRequest } from "../requestMethods";

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const CheckoutButton = () => {
  const cart = useSelector((state) => state.cart);

  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", { data: res.data });
      } catch {
        alert("failed");
      }
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  return (
    <StripeCheckout
      name="Fashion_Point"
      image="https://drive.google.com/uc?id=15E-DQg1cQVRA-jDsOnisJ_sPde0xB98s"
      billingAddress
      shippingAddress
      description={`Your total is $${cart.total}`}
      amount={cart.total * 100}
      token={onToken}
      currency="cad"
      stripeKey={process.env.REACT_APP_STRIPE}
    >
      <Button>CHECKOUT NOW</Button>
    </StripeCheckout>
  );
};

export default CheckoutButton;
