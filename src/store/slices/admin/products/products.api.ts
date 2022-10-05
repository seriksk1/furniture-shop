import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { prepareHeadersWithToken } from "../../../../utils"

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URI}/api`,
    prepareHeaders: prepareHeadersWithToken,
  }),
  endpoints: (builder) => ({
    createProduct: builder.mutation<ProductCreateResponse, ProductCreateRequest>({
      query: (body) => ({
        url: "products",
        method: "POST",
        body: body,
      }),
    }),

    updateProduct: builder.mutation<ProductUpdateResponse, ProductUpdateRequest>({
      query: (body) => ({
        url: "products",
        method: "PUT",
        body: body,
      }),
    }),
    deleteProduct: builder.mutation<ProductDeleteResponse, ProductDeleteRequest>({
      query: (params) => ({
        url: "products",
        method: "DELETE",
        params: params,
      }),
    }),
    getProduct: builder.query<ProductGetResponse, ProductGetRequest>({
      query: (params) => ({
        url: "products",
        method: "GET",
        params: params,
      }),
    }),
    getProducts: builder.query<ProductsGetResponse, ProductsGetRequest>({
      query: (params) => ({
        url: "products",
        method: "GET",
        params: params,
      }),
    }),
  }),
})

export const {
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductQuery,
  useGetProductsQuery,
} = productsApi
