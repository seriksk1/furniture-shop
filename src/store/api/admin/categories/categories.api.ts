import { baseApi, httpMethods } from "../../base.api"

const CATEGORIES_URL = "/categories"

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation<CategoryCreateResponse, CategoryCreateRequest>({
      query: (body) => ({
        url: CATEGORIES_URL,
        method: httpMethods.POST,
        body: body,
      }),
    }),
    updateCategory: builder.mutation<CategoryUpdateResponse, CategoryUpdateRequest>({
      query: (body) => ({
        url: CATEGORIES_URL,
        method: httpMethods.PUT,
        body: body,
      }),
    }),
    deleteCategory: builder.mutation<CategoryDeleteResponse, CategoryDeleteRequest>({
      query: (params) => ({
        url: CATEGORIES_URL,
        method: httpMethods.DELETE,
        params: params,
      }),
    }),
    getCategory: builder.query<CategoryGetResponse, CategoryGetRequest>({
      query: (params) => ({
        url: CATEGORIES_URL,
        method: httpMethods.GET,
        params: params,
      }),
    }),
    getCategories: builder.query<CategoriesGetResponse, CategoriesGetRequest>({
      query: () => ({
        url: CATEGORIES_URL,
        method: httpMethods.GET,
      }),
    }),
  }),
})

export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryQuery,
  useGetCategoriesQuery,
} = categoriesApi
