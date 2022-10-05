import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../store"

const initialState = {}

const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    createRole: (state, action) => {},
    updateRole: (state, action) => {},
    deleteRole: (state, action) => {},
  },
})

export const { createRole, updateRole, deleteRole } = rolesSlice.actions

export const rolesReducer = rolesSlice.reducer

export const selectRoles = (state: RootState) => state.admin.roles
