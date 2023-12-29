import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RootApi = createApi({
  reducerPath: "RootApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecommerce-web-ev3g.onrender.com/api/",
    prepareHeaders: (headers, { getState }) => {
      const access = getState().auth.accessToken || "";
      // console.log(access);
      if (access) {
        // console.log(access);
        headers.set("Authorization", `JWT ${access}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "ParentProductCategory",
    "Cart",
    "CartItems",
    "OrderAddress",
    "Order",
    "OrderItems",
  ],

  endpoints: (builder) => ({
    postCategory: builder.mutation({
      query: ({ formData }) => ({
        url: "categorys/parent/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["ParentProductCategory"],
    }),
  }),
});

export const { usePostCategoryMutation } = RootApi;
