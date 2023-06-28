import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../store"

const initialState = {}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    createProduct: (state, action) => {},
    updateProduct: (state, action) => {},
    deleteProduct: (state, action) => {},
    setProducts: (state, action) => {},
  },
})

export const { createProduct, updateProduct, deleteProduct, setProducts } = productsSlice.actions

export const productsReducer = productsSlice.reducer

export const selectProducts = (state: RootState) => state.admin.products
