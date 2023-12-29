// import { createSlice } from "@reduxjs/toolkit";

// const OrderItemsFromStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("orderItems"))
//   : [];

// const OrderIdFromStorage = localStorage.getItem("state_order_id")
//   ? JSON.parse(localStorage.getItem("state_order_id"))
//   : "";

// const initialState = {
//   orderItems: orderItemsFromStorage,
//   orderId: orderIdFromStorage,
// };

// const OrderSlice = createSlice({
//   name: "order",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       localStorage.setItem("state_cart_id", JSON.stringify(action.payload));
//       state.cartId = action.payload;
//       console.log(action.payload);
//     },

//     updateCart: (state, action) => {
//       // state.cartItems = state.cartItems.filter(
//       //   (storedItem) => storedItem !== action.payload
//       // );
//       const updated = state.cartItems.filter(
//         (storedItem) => storedItem !== action.payload
//       );
//       console.log(updated);
//       console.log(action.payload);

//       // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//       // state.cartItems = [action.payload];
//     },

//     deleteCart: (state) => {
//       state.cartItems = localStorage.removeItem("cartItems");
//       state.cartItems = [];
//     },
//   },
// });

// export const { addToCart, deleteCart, updateCart } = OrderSlice.actions;
// export default OrderSlice.reducer;

// export const selectCartItems = (state) => state.cart.cartItems;
// export const getCartId = (state) => state.cart.cartId;

// {
// }
