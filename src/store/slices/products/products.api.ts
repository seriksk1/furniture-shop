import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { prepareHeadersWithToken } from "../../../utils"

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_URI}/user`,
    prepareHeaders: prepareHeadersWithToken,
  }),
  endpoints: (builder) => ({}),
})

export const {} = productsApi
