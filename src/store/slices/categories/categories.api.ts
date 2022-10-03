import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { prepareHeadersWithToken } from "../../../utils"

export const categoriesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URI}/api`,
    prepareHeaders: prepareHeadersWithToken,
  }),
  endpoints: (builder) => ({
    createCategory: builder.mutation<CategoryCreateResponse, CategoryCreateRequest>({
      query: (body) => ({
        url: "categories",
        method: "POST",
        body: body,
      }),
    }),
    updateCategory: builder.mutation<CategoryUpdateResponse, CategoryUpdateRequest>({
      query: (body) => ({
        url: "categories",
        method: "PUT",
        body: body,
      }),
    }),
    deleteCategory: builder.mutation<CategoryDeleteResponse, CategoryDeleteRequest>({
      query: (params) => ({
        url: "categories",
        method: "DELETE",
        params: params,
      }),
    }),
    getCategory: builder.query<CategoryGetResponse, CategoryGetRequest>({
      query: (params) => ({
        url: "categories",
        method: "GET",
        params: params,
      }),
    }),
    getCategories: builder.query<CategoriesGetResponse, CategoriesGetRequest>({
      query: () => ({
        url: "categories",
        method: "GET",
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
