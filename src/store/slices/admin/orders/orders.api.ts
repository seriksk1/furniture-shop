import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { prepareHeadersWithToken } from "../../../../utils"

export const ordersApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URI}/api`,
    prepareHeaders: prepareHeadersWithToken,
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation<OrderCreateResponse, OrderCreateRequest>({
      query: (body) => ({
        url: "orders",
        method: "POST",
        body: body,
      }),
    }),
    updateOrder: builder.mutation<OrderUpdateResponse, OrderUpdateRequest>({
      query: (body) => ({
        url: "orders",
        method: "PUT",
        body: body,
      }),
    }),
    deleteOrder: builder.mutation<OrderDeleteResponse, OrderDeleteRequest>({
      query: (params) => ({
        url: "orders",
        method: "DELETE",
        params: params,
      }),
    }),
    getOrder: builder.query<OrderGetResponse, OrderGetRequest>({
      query: (params) => ({
        url: "orders",
        method: "GET",
        params: params,
      }),
    }),
    getOrders: builder.query<OrdersGetResponse, OrdersGetRequest>({
      query: () => ({
        url: "orders",
        method: "GET",
      }),
    }),
  }),
})

export const {
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
  useGetOrderQuery,
  useGetOrdersQuery,
} = ordersApi
