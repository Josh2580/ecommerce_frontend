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

    registerUser: build.mutation({
      query: ({ formData }) => ({
        url: "auth/users/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCustomersLoginMutation,
  useGetUserProfileQuery,
  useRegisterUserMutation,
} = authenticationApi;
