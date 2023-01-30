import { baseApi, httpMethods } from "../../base.api"

const CATEGORIES_URL = "/api/categories"

export const publicCategoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicCategories: builder.query<CategoriesGetResponse, CategoriesGetRequest>({
      query: (params) => ({
        url: CATEGORIES_URL,
        method: httpMethods.GET,
        params: params,
      }),
    }),
  }),
})

export const { useGetPublicCategoriesQuery } = publicCategoriesApi
