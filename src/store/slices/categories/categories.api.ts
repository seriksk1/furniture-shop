import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { prepareHeadersWithToken } from "../../../utils"

export const categoriesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.DB_HOST}/categories`,
    prepareHeaders: prepareHeadersWithToken,
  }),
  endpoints: (builder) => ({}),
})

export const {} = categoriesApi
