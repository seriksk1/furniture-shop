import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"

const initialState = {}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    createCategory: (state, action) => {},
    updateCategory: (state, action) => {},
    deleteCategory: (state, action) => {},
    setCategories: (state, action) => {},
  },
})

export const { createCategory, updateCategory, deleteCategory } = categoriesSlice.actions

export const categoriesReducer = categoriesSlice.reducer

export const selectCategories = (state: RootState) => state.categories
