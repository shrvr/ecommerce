import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const CartProductInfo = (props) => {
  const productDetails = {
    imgLink: "https://drive.google.com/uc?id=1thC-GCL5yjh4ezQ9XxaTKcNPtvxKNhh3",
    name: "JESSIE THUNDER SHOES",
    pid: "93813718293",
    size: "37.5",
    qty: "2",
    price: "30",
  };
  return (
    <Product>
      <ProductDetail>
        <Image src={productDetails.imgLink} />
        <Details>
          <ProductName>
            <b>Product:</b> {productDetails.name}
          </ProductName>
          <ProductId>
            <b>ID:</b> {productDetails.pid}
          </ProductId>
          <ProductColor color="black" />
          <ProductSize>
            <b>Size:</b> {productDetails.size}
          </ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <Add />
          <ProductAmount>{productDetails.qty}</ProductAmount>
          <Remove />
        </ProductAmountContainer>
        <ProductPrice>$ {productDetails.price}</ProductPrice>
      </PriceDetail>
    </Product>
  );
};

export default CartProductInfo;
