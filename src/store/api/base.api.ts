import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_URI } from "../../config"

export const httpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
}

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URI,
  }),
  endpoints: () => ({}),
})
