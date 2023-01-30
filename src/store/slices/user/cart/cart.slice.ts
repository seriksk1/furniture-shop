import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../store"

const initialState: ICartState = {
  list: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Product>) => {
      const itemInCart = state.list.find((item) => item.id === payload.id)
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.list.push({ ...payload, quantity: 1 })
      }
    },
    removeFromCart: (state, { payload }: PayloadAction<number>) => {
      const removedItem = state.list.filter((item) => item.id !== payload)
      state.list = removedItem
    },
    incrementQuantity: (state, { payload }: PayloadAction<number>) => {
      const item = state.list.find((item) => item.id === payload)
      item && item.quantity++
    },
    decrementQuantity: (state, { payload }: PayloadAction<number>) => {
      const item = state.list.find((item) => item.id === payload)
      if (item && item.quantity === 1) {
        item.quantity = 1
      } else {
        item && item.quantity--
      }
    },
  },
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export const selectCart = (state: RootState) => state.user.cart

export const cartReducer = cartSlice.reducer
