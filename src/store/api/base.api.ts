import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { APP_URI } from "../../config"

export const httpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
}

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: APP_URI,
  }),
  endpoints: () => ({}),
})
