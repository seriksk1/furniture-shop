import { baseApi, httpMethods } from "../../base.api"

const PRODUCTS_URL = "/products"

export const publicProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicProducts: builder.query<ProductsGetResponse, ProductsGetRequest>({
      query: (params) => ({
        url: PRODUCTS_URL,
        method: httpMethods.GET,
        params: params,
      }),
    }),
  }),
})

export const { useGetPublicProductsQuery } = publicProductsApi
