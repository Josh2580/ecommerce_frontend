import { RootApi } from "./RootApi";

const categorysApi = RootApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategory: build.query({
      query: () => "categorys/main/",
    }),
    getCategoryById: build.query({
      query: ({ id }) => `categorys/main/${id}/`,
    }),
    postCategory: build.mutation({
      query: ({ formData }) => ({
        url: "categorys/parent/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllCategoryQuery,
  useGetCategoryByIdQuery,
  // usePostCategoryMutation,
} = categorysApi;
