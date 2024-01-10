import { createSlice } from "@reduxjs/toolkit";

const token = JSON.parse(localStorage.getItem("token")) || "";
const access = JSON.parse(localStorage.getItem("access")) || "";

const isToken = token ? true : false;

const userInfoFromStorage = JSON.parse(localStorage.getItem("userState")) || [];

const initialState = {
  userState: userInfoFromStorage,
  token: token,
  isToken: isToken,
  access,
};

// console.log(initialState.userInfo);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // console.log(action.payload);

      if (action?.payload?.data?.refresh) {
        localStorage.setItem(
          "token",
          JSON.stringify(action.payload.data.refresh)
        );
        state.token = action.payload.data ? action.payload.data.refresh : [];
      }
      if (action?.payload?.data?.access) {
        localStorage.setItem(
          "access",
          JSON.stringify(action.payload.data.access)
        );
        state.access = action.payload.data ? action.payload.data.access : [];
      }

      state.isToken = true;
    },

    userState: (state, action) => {
      localStorage.setItem("userState", JSON.stringify(action.payload));
      state.userState = action.payload || [];
    },

    logout: (state) => {
      localStorage.removeItem("userState");
      state.userState = [];

      localStorage.removeItem("token");
      state.token = [];

      localStorage.removeItem("access");
      state.access = "";

      state.isToken = false;
    },
  },
});

export const { login, userState, logout } = AuthSlice.actions;
export default AuthSlice.reducer;

export const selectCurrentUser = (state) => state.auth;
export const selectCurrentToken = (state) => state.auth.token;
// export const selectUserInfo = (state) => state.auth.userState;
