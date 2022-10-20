import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { prepareHeadersWithToken } from "../../../../utils"

export const publicProductsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URI}/api`,
    prepareHeaders: prepareHeadersWithToken,
  }),
  endpoints: (builder) => ({
    getPublicProducts: builder.query<ProductsGetResponse, ProductsGetRequest>({
      query: (params) => ({
        url: "products",
        method: "GET",
        params: params,
      }),
    }),
  }),
})

export const { useGetPublicProductsQuery } = publicProductsApi
