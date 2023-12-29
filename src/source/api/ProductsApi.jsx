import { RootApi } from "./RootApi";

const productsApi = RootApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProduct: build.query({
      query: () => "products/all/",
    }),
    getProductById: build.query({
      query: (id) => `products/all/${id}/`,
    }),
    getProductColors: build.query({
      query: () => "products/color/",
    }),
    getProductSizes: build.query({
      query: () => "products/size/",
    }),
    getProductQuality: build.query({
      query: () => "products/quality/",
    }),
  }),
  overrideExisting: false,
});

//  prepareHeaders: (headers, { getState }) => {
//         const token = getState().auth.userInfo;
//         console.log(token);

//         Add custom headers here
//         console.log(localStorage.getItem("userInfo"));
//         headers.append(
//           "Authorization",
//           `JWT ${localStorage.getItem("userInfo")}`
//         );
//         return headers;
//       },

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useGetProductColorsQuery,
  useGetProductSizesQuery,
  useGetProductQualityQuery,
} = productsApi;
