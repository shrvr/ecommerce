import styled from "styled-components";
import CheckoutButton from "./CheckoutButton";
import { useSelector } from "react-redux";

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

const CheckoutSummary = () => {
  const cart = useSelector((state) => state.cart);

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

      <CheckoutButton />
    </Summary>
  );
};

export default CheckoutSummary;
