import { baseApi, httpMethods } from "../../base.api"

const ORDERS_URL = "/api/orders"

export const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<OrderCreateResponse, OrderCreateRequest>({
      query: (body) => ({
        url: ORDERS_URL,
        method: httpMethods.POST,
        body: body,
      }),
    }),
    updateOrder: builder.mutation<OrderUpdateResponse, OrderUpdateRequest>({
      query: (body) => ({
        url: ORDERS_URL,
        method: httpMethods.PUT,
        body: body,
      }),
    }),
    deleteOrder: builder.mutation<OrderDeleteResponse, OrderDeleteRequest>({
      query: (params) => ({
        url: ORDERS_URL,
        method: httpMethods.DELETE,
        params: params,
      }),
    }),
    getOrder: builder.query<OrderGetResponse, OrderGetRequest>({
      query: (params) => ({
        url: ORDERS_URL,
        method: httpMethods.GET,
        params: params,
      }),
    }),
    getOrders: builder.query<OrdersGetResponse, OrdersGetRequest>({
      query: () => ({
        url: ORDERS_URL,
        method: httpMethods.GET,
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
