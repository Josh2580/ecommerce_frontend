import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const cartIdFromStorage = localStorage.getItem("state_cart_id")
  ? JSON.parse(localStorage.getItem("state_cart_id"))
  : "";

const initialState = {
  cartItems: cartItemsFromStorage,
  cartId: cartIdFromStorage,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      localStorage.setItem("state_cart_id", JSON.stringify(action.payload));
      state.cartId = action.payload;
      console.log(action.payload);
    },

    updateCart: (state, action) => {
      // state.cartItems = state.cartItems.filter(
      //   (storedItem) => storedItem !== action.payload
      // );
      const updated = state.cartItems.filter(
        (storedItem) => storedItem !== action.payload
      );
      console.log(updated);
      console.log(action.payload);

      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // state.cartItems = [action.payload];
    },

    deleteCart: (state) => {
      state.cartItems = localStorage.removeItem("cartItems");
      state.cartItems = [];
      localStorage.removeItem("state_cart_id");
      state.cartId = [];
    },
  },
});

export const { addToCart, deleteCart, updateCart } = CartSlice.actions;
export default CartSlice.reducer;

export const selectCartItems = (state) => state.cart.cartItems;
export const getCartId = (state) => state.cart.cartId;
