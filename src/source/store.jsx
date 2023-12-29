import { configureStore } from "@reduxjs/toolkit";
import { RootApi } from "./api/RootApi";
import AuthReducer from "./storage/AuthSlice";
import CartReducer from "./storage/CartSlice";

export const store = configureStore({
  reducer: {
    [RootApi.reducerPath]: RootApi.reducer,
    auth: AuthReducer,
    cart: CartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RootApi.middleware),
  // devTools: true, // set to false on production level
});
