import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { prepareHeadersWithToken } from "../../../utils"

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URI}/user`,
    prepareHeaders: prepareHeadersWithToken,
  }),
  endpoints: (builder) => ({}),
})

export const {} = userApi
