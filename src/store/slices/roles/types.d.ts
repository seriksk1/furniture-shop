interface Role {
  name: string
  description: string
  image?: string
}

type RoleList = Role[]

//-------- Requests --------//

interface RoleCreateRequest {}
interface RoleUpdateRequest {}
interface RoleDeleteRequest {}
interface RoleGetRequest {}
interface RolesGetRequest {}

//-------- Responses --------//

interface RoleCreateResponse {}
interface RoleUpdateResponse {}
interface RoleDeleteResponse {}
interface RoleGetResponse {}
interface RolesGetResponse {}
