import newUserReq, { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { fetchCart } from "./cartRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getCart = async (dispatch, token, userId) => {
  try {
    const res = await newUserReq(token).get(`/carts/find/${userId}`);
    dispatch(fetchCart(res.data));
  } catch (err) {
    //if err means cart is not found then create an empty cart for user on first login
    try {
      console.log("cart fetching failled");
      const newEmptyCart = { products: [], total: 0, totalQuantity: 0 };
      const newRes = await createCart(dispatch, newEmptyCart, token, userId);
      dispatch(fetchCart(newRes.data));
      console.log("created_cart", newRes.data);
    } catch (err) {
      console.log("cart fetching and cart creation failled");
    }
  }
};

export const updateCart = async (dispatch, upCart, token, userId) => {
  try {
    const res = await newUserReq(token).put(`/carts/find/${userId}`, upCart);
    console.log("updated_Cart", res.data);
    dispatch(fetchCart(res.data));
  } catch (err) {
    console.log("cart updating failed");
  }
};

export const createCart = async (dispatch, newEmptyCart, token, userId) => {
  try {
    const res = await newUserReq(token).post(
      `/carts/create/${userId}`,
      newEmptyCart
    );
    console.log("New_Cart", res.data);
    dispatch(fetchCart(res.data));
  } catch (err) {
    console.log("cart creation failed");
  }
};
