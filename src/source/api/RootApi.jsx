import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, login } from "../storage/AuthSlice";

// export const RootApi = createApi({
const baseQuery = fetchBaseQuery({
  // reducerPath: "RootApi",
  // baseQuery: fetchBaseQuery({
  // baseUrl: "https://ecommerce-web-ev3g.onrender.com/api/",
  baseUrl: "http://127.0.0.1:8000/api/",
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const access = getState().auth.access || "";
    // console.log(access);
    if (access) {
      // console.log(access);
      headers.set("Authorization", `JWT ${access}`);
    }
    return headers;
  },
});

const BaseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const token = api.getState().auth.token;
  if (
    result?.error?.status === 401 &&
    result?.error?.data?.code === "token_not_valid"
  ) {
    // console.log("Sending Refresh Token");
    // console.log(result?.error?.data?.code === "token_not_valid");
    // Send refresh token to get new access token
    const refreshResult = await baseQuery(
      {
        url: "auth/jwt/refresh",
        method: "POST",
        body: { refresh: token.refresh },
      },
      // null,
      api,
      extraOptions
    );
    // console.log(refreshResult);
    if (refreshResult?.data) {
      //     // store the new token
      //     api.dispatch(userState({ ...refreshResult.data, user }));
      api.dispatch(login({ ...refreshResult }));
      //     // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const RootApi = createApi({
  baseQuery: BaseQueryWithReauth,
  endpoints: (builder) => ({}),
});
