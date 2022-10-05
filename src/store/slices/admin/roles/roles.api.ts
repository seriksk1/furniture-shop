import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { prepareHeadersWithToken } from "../../../../utils"

export const rolesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URI}/api`,
    prepareHeaders: prepareHeadersWithToken,
  }),
  endpoints: (builder) => ({
    createRole: builder.mutation<RoleCreateResponse, RoleCreateRequest>({
      query: (body) => ({
        url: "roles",
        method: "POST",
        body: body,
      }),
    }),
    updateRole: builder.mutation<RoleUpdateResponse, RoleUpdateRequest>({
      query: (body) => ({
        url: "roles",
        method: "PUT",
        body: body,
      }),
    }),
    deleteRole: builder.mutation<RoleDeleteResponse, RoleDeleteRequest>({
      query: (params) => ({
        url: "roles",
        method: "DELETE",
        params: params,
      }),
    }),
    getRole: builder.query<RoleGetResponse, RoleGetRequest>({
      query: (params) => ({
        url: "roles",
        method: "GET",
        params: params,
      }),
    }),
    getRoles: builder.query<RolesGetResponse, RolesGetRequest>({
      query: () => ({
        url: "roles",
        method: "GET",
      }),
    }),
  }),
})

export const {
  useCreateRoleMutation,
  useUpdateRoleMutation,
  useDeleteRoleMutation,
  useGetRoleQuery,
  useGetRolesQuery,
} = rolesApi
