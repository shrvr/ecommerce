import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    _id: "",
    products: [],
    totalQuantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.totalQuantity += action.payload.quantity;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    fetchCart: (state, action) => {
      state._id = action.payload._id;
      state.totalQuantity = action.payload.totalQuantity;
      state.products = action.payload.products;
      state.total = action.payload.total;
    },
    logoutCart: (state) => {
      state._id = "";
      state.totalQuantity = 0;
      state.products = [];
      state.total = 0;
    },
    incrDecrQuantity: (state, action) => {
      //to increment or decrement a product quantuty in a cart
      state.products[action.payload.i] = {
        ...state.products[action.payload.i],
        quantity:
          state.products[action.payload.i].quantity + action.payload.diff,
      };
      state.totalQuantity += action.payload.diff;
      state.total =
        state.total +
        state.products[action.payload.i].price * action.payload.diff;
    },
    deleteItem: (state, action) => {
      state.products.splice(action.payload.index, 1);
      state.totalQuantity -= action.payload.qtyDiff;
      state.total -= action.payload.totalDiff;
    },
  },
});

export const {
  fetchCart,
  logoutCart,
  addProduct,
  incrDecrQuantity,
  deleteItem,
} = cartSlice.actions;
export default cartSlice.reducer;
