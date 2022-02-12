import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const CheckoutSummary = ({ cart }) => {
  const KEY = process.env.REACT_APP_STRIPE;

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

  const summaryDetails = [
    { summaryText: "Subtotal", price: cart.total, type: "" },
    { summaryText: "Estimated Shipping", price: "$ 5.90", type: "" },
    { summaryText: "Shipping Discount", price: "$ -5.90", type: "" },
    { summaryText: "Total", price: cart.total, type: "total" },
  ];
  return (
    <Summary>
      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
      {summaryDetails.map((item) => (
        <SummaryItem type={item.type} key={item.summaryText}>
          <SummaryItemText>{item.summaryText}</SummaryItemText>
          <SummaryItemPrice> $ {item.price}</SummaryItemPrice>
        </SummaryItem>
      ))}

      <StripeCheckout
        name="Fashion_Point"
        image="https://drive.google.com/uc?id=15E-DQg1cQVRA-jDsOnisJ_sPde0xB98s"
        billingAddress
        shippingAddress
        description={`Your total is $${cart.total}`}
        amount={cart.total * 100}
        token={onToken}
        currency="cad"
        stripeKey={KEY}
      >
        <Button>CHECKOUT NOW</Button>
      </StripeCheckout>
    </Summary>
  );
};

export default CheckoutSummary;
