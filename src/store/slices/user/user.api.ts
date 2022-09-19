import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { prepareHeadersWithToken } from "../../../utils"

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.DB_HOST}/user`,
    prepareHeaders: prepareHeadersWithToken,
  }),
  endpoints: (builder) => ({}),
})

export const {} = userApi
