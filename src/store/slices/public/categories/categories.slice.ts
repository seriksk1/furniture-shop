import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../store"

const initialState = {}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setPublicCategories: (state, action) => {},
  },
})

export const { setPublicCategories } = categoriesSlice.actions

export const publicCategoriesReducer = categoriesSlice.reducer

export const selectPublicCategories = (state: RootState) => state.public.categories
