import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { prepareHeadersWithToken } from "../../../../utils"

export const publicCategoriesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URI}/api`,
    prepareHeaders: prepareHeadersWithToken,
  }),
  endpoints: (builder) => ({
    getPublicCategories: builder.query<CategoriesGetResponse, CategoriesGetRequest>({
      query: (params) => ({
        url: "categories",
        method: "GET",
        params: params,
      }),
    }),
  }),
})

export const { useGetPublicCategoriesQuery } = publicCategoriesApi
