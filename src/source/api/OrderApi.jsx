import { RootApi } from "./RootApi";

const OrderApi = RootApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: ({ formData }) => ({
        url: "orders/all/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["OrderAddress", "Order", "OrderItems"],
    }),
    updateOrderPayment: build.mutation({
      query: ({ formData, orderId }) => ({
        url: `orders/all/${orderId}/`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["OrderAddress", "Order", "OrderItems"],
    }),
    getOrderById: build.query({
      query: (id) => `orders/all/${id}/`,
      providesTags: ["OrderAddress", "Order", "OrderItems"],
    }),
    getOrderItems: build.query({
      query: (id) => `orders/all/${id}/items/`,
      providesTags: ["Order", "OrderItems"],
    }),
    getOrderAddress: build.query({
      query: (orderId) => `orders/all/${orderId}/address/`,
      providesTags: ["OrderAddress", "Order", "OrderItems"],
    }),
    createOrderAddress: build.mutation({
      query: ({ formData, orderId }) => ({
        url: `orders/all/${orderId}/address/`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["OrderAddress", "Order", "OrderItems"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateOrderMutation,
  useGetOrderByIdQuery,
  useGetOrderItemsQuery,
  useCreateOrderAddressMutation,
  useGetOrderAddressQuery,
  useUpdateOrderPaymentMutation,
} = OrderApi;
