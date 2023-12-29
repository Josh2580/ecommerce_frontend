import { RootApi } from "./RootApi";

const authenticationApi = RootApi.injectEndpoints({
  tagTypes: ["User"],

  endpoints: (build) => ({
    customersLogin: build.mutation({
      query: ({ formData }) => ({
        url: "auth/jwt/create/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
    getUserProfile: build.query({
      query: () => "auth/users/me/",
    }),
  }),
  overrideExisting: false,
});

export const { useCustomersLoginMutation, useGetUserProfileQuery } =
  authenticationApi;
