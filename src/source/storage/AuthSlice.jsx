import { createSlice } from "@reduxjs/toolkit";

const accessToken = JSON.parse(localStorage.getItem("accessToken")) || "";
const isToken = accessToken ? true : false;

const userInfoFromStorage = JSON.parse(localStorage.getItem("userState")) || [];

const initialState = {
  userState: userInfoFromStorage,
  accessToken: accessToken,
  isToken: isToken,
};

// console.log(initialState.userInfo);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // localStorage.setItem("userInfo", JSON.stringify(action.payload));
      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.payload.data.access)
      );
      // console.log(action.payload);

      // state.userInfo = action.payload;
      state.accessToken = action.payload.data ? action.payload.data.access : [];
      state.isToken = true;
    },

    userState: (state, action) => {
      localStorage.setItem("userState", JSON.stringify(action.payload));
      // console.log(action.payload);
      state.userState = action.payload || [];
    },

    logout: (state) => {
      localStorage.removeItem("userState");
      state.userState = [];
      localStorage.removeItem("accessToken");
      state.accessToken = [];
    },
  },
});

export const { login, userState, logout } = AuthSlice.actions;
export default AuthSlice.reducer;

export const selectCurrentUser = (state) => state.auth;
export const selectCurrentToken = (state) => state.auth.accessToken;
// export const selectUserInfo = (state) => state.auth.userState;
