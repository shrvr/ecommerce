import { Add, Remove } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { updateCart } from "../redux/apiCalls";
import { addProduct, incrDecrQuantity } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
import { toast, ToastContainer } from "react-toastify";
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "../styledComponents/ProductPage.style";

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQty] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
        setColor(res.data.color[0]);
        setSize(res.data.size[0]);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  //connts required to update cart
  const userId = useSelector((state) => state.user.currentUser._id);
  const TOKEN = useSelector((state) => state.user.currentUser.accessToken);
  const updatedReduxCart = useSelector((state) => state.cart);
  const [isUpdated, setIsUpdated] = useState(false);
  const isMounted = useRef(false);

  const cartProductArray = useSelector((state) => state.cart.products);

  function handleClick() {
    //check if product with same color and size already exist in cart
    // if yes then add the quantity to that product
    let isProductExist = false;
    let i = null;
    for (var index = 0, l = cartProductArray.length; index < l; index++) {
      if (cartProductArray[index].productId === product._id) {
        if (
          cartProductArray[index].color === color &&
          cartProductArray[index].size === size
        )
          isProductExist = true;
        i = index;
      }
    }
    //update redux
    if (isProductExist) {
      let diff = quantity;
      console.log("product exist");
      dispatch(incrDecrQuantity({ i, diff }));
      setIsUpdated(!isUpdated);
    } else {
      dispatch(
        addProduct({
          productId: product._id,
          title: product.title,
          img: product.img,
          price: product.price,
          quantity,
          color,
          size,
        })
      );
      setIsUpdated(!isUpdated);
    }
  }

  useEffect(() => {
    if (isMounted.current) {
      updateCart(dispatch, updatedReduxCart, TOKEN, userId);
      toast.success("Cart Updated Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      isMounted.current = true;
    }
  }, [isUpdated]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onClick={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => {
                  quantity > 1 && setQty(quantity - 1);
                }}
              />
              <Amount>{quantity}</Amount>
              <Add
                onClick={() => {
                  setQty(quantity + 1);
                }}
              />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              draggable
            />
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductPage;
