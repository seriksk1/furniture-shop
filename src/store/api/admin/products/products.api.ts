import { baseApi, httpMethods } from "../../base.api"

const PRODUCTS_URL = "/api/products"

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation<ProductCreateResponse, ProductCreateRequest>({
      query: (body) => ({
        url: PRODUCTS_URL,
        method: httpMethods.POST,
        body: body,
      }),
    }),

    updateProduct: builder.mutation<ProductUpdateResponse, ProductUpdateRequest>({
      query: (body) => ({
        url: PRODUCTS_URL,
        method: httpMethods.PUT,
        body: body,
      }),
    }),
    deleteProduct: builder.mutation<ProductDeleteResponse, ProductDeleteRequest>({
      query: (params) => ({
        url: PRODUCTS_URL,
        method: httpMethods.DELETE,
        params: params,
      }),
    }),
    getProduct: builder.query<ProductGetResponse, ProductGetRequest>({
      query: (params) => ({
        url: PRODUCTS_URL,
        method: httpMethods.GET,
        params: params,
      }),
    }),
    getProducts: builder.query<ProductsGetResponse, ProductsGetRequest>({
      query: (params) => ({
        url: PRODUCTS_URL,
        method: httpMethods.GET,
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
