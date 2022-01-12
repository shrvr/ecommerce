import styled from "styled-components";
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

const CheckoutSummary = () => {
  const summaryDetails = [
    { summaryText: "Subtotal", price: "$ 80" },
    { summaryText: "Estimated Shipping", price: "$ 5.90" },
    { summaryText: "Shipping Discount", price: "$ -5.90" },
  ];
  return (
    <Summary>
      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
      {summaryDetails.map((item) => (
        <SummaryItem>
          <SummaryItemText>{item.summaryText}</SummaryItemText>
          <SummaryItemPrice>{item.price}</SummaryItemPrice>
        </SummaryItem>
      ))}
      <Button>CHECKOUT NOW</Button>
    </Summary>
  );
};

export default CheckoutSummary;
