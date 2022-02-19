import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, incrDecrQuantity } from "../redux/cartRedux";
import { useEffect, useRef, useState } from "react";
import { updateCart } from "../redux/apiCalls";
import NewLink from "./NewLink";

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
  border: 1px solid black;
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

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const CartProductInfo = ({ product }) => {
  const productArray = useSelector((state) => state.cart.products);
  const [isUpdated, setIsUpdated] = useState(false);

  const dispatch = useDispatch();

  const findIndex = (productArray) => {
    for (var i = 0, l = productArray.length; i < l; i++) {
      if (productArray[i]._id === product._id) {
        return i;
      }
    }
  };

  const handleIncrDecr = (type) => {
    let diff = 0;
    if (type === "add") diff = 1;
    else if (type === "remove") {
      if (product.quantity > 1) diff = -1;
    }
    const i = findIndex(productArray);
    dispatch(incrDecrQuantity({ i, diff }));
    setIsUpdated(!isUpdated);
  };

  const handleDelete = () => {
    const index = findIndex(productArray);
    const qtyDiff = productArray[index].quantity;
    const totalDiff = productArray[index].quantity * productArray[index].price;
    dispatch(deleteItem({ index, qtyDiff, totalDiff }));
  };

  const updatedReduxCart = useSelector((state) => state.cart);
  const isMounted = useRef(false);
  const userId = useSelector((state) => state.user.currentUser._id);
  const TOKEN = useSelector((state) => state.user.currentUser.accessToken);

  useEffect(() => {
    if (isMounted.current) {
      updateCart(dispatch, updatedReduxCart, TOKEN, userId);
    } else {
      isMounted.current = true;
    }
  }, [isUpdated]);

  return (
    <div>
      <Product>
        <ProductDetail>
          <NewLink to={`/product/${product.productId}`}>
            <Image src={product.img} />
          </NewLink>
          <Details>
            <ProductName>
              <b>Product:</b> {product.title}
            </ProductName>
            <ProductColor color={product.color} />
            <ProductSize>
              <b>Size:</b> {product.size}
            </ProductSize>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Add onClick={() => handleIncrDecr("add")} />
            <ProductAmount>
              {product.quantity}
              {}
            </ProductAmount>
            <Remove onClick={() => handleIncrDecr("remove")} />
            <DeleteIcon onClick={handleDelete}>Delete</DeleteIcon>
          </ProductAmountContainer>

          <ProductPrice>$ {product.price}</ProductPrice>
        </PriceDetail>
      </Product>
      <Hr />
    </div>
  );
};

export default CartProductInfo;
