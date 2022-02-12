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

const CartProductInfo = ({ product }) => {
  console.log(product);
  return (
    <Product>
      <ProductDetail>
        <Image src={product.img} />
        <Details>
          <ProductName>
            <b>Product:</b> {product.title}
          </ProductName>
          <ProductId>
            <b>ID:</b> {product._id}
          </ProductId>
          <ProductColor color={product.color} />
          <ProductSize>
            <b>Size:</b> {product.size}
          </ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <Add />
          <ProductAmount>{product.qty}</ProductAmount>
          <Remove />
        </ProductAmountContainer>
        <ProductPrice>$ {product.price}</ProductPrice>
      </PriceDetail>
    </Product>
  );
};

export default CartProductInfo;
