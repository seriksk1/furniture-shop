import { baseApi, httpMethods } from "../../base.api"

const PRODUCTS_URL = "/products"

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
      query: (id) => ({
        url: PRODUCTS_URL + `/${id}`,
        method: httpMethods.DELETE,
      }),
    }),
    getProduct: builder.query<ProductGetResponse, ProductGetRequest>({
      query: (id) => ({
        url: PRODUCTS_URL + `/${id}`,
        method: httpMethods.GET,
      }),
    }),
    getProducts: builder.query<ProductsGetResponse, ProductsGetRequest>({
      query: () => ({
        url: PRODUCTS_URL,
        method: httpMethods.GET,
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
