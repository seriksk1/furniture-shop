import { baseApi, httpMethods } from "../../base.api"

const ROLES_URL = "/roles"

export const rolesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRole: builder.mutation<RoleCreateResponse, RoleCreateRequest>({
      query: (body) => ({
        url: ROLES_URL,
        method: httpMethods.POST,
        body: body,
      }),
    }),
    updateRole: builder.mutation<RoleUpdateResponse, RoleUpdateRequest>({
      query: (body) => ({
        url: ROLES_URL,
        method: httpMethods.PUT,
        body: body,
      }),
    }),
    deleteRole: builder.mutation<RoleDeleteResponse, RoleDeleteRequest>({
      query: (params) => ({
        url: ROLES_URL,
        method: httpMethods.DELETE,
        params: params,
      }),
    }),
    getRole: builder.query<RoleGetResponse, RoleGetRequest>({
      query: (params) => ({
        url: ROLES_URL,
        method: httpMethods.GET,
        params: params,
      }),
    }),
    getRoles: builder.query<RolesGetResponse, RolesGetRequest>({
      query: () => ({
        url: ROLES_URL,
        method: httpMethods.GET,
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
