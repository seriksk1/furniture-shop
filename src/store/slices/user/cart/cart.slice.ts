import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../store"

const initialState: ICartState = {
  list: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<{ product: Product; quantity: number }>) => {
      const { product, quantity } = payload

      const itemInCart = state.list.find((item) => item.id === product.id)
      if (itemInCart) {
        itemInCart.quantity += quantity
      } else {
        state.list.push({ ...product, quantity })
      }
    },
    removeFromCart: (state, { payload }: PayloadAction<number>) => {
      const removedItem = state.list.filter((item) => item.id !== payload)
      state.list = removedItem
    },
    setCartItemQuantity: (state, { payload }: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.list.find((item) => item.id === payload.id)
      if (item) {
        item.quantity = payload.quantity
      }
    },
  },
})

export const { addToCart, removeFromCart, setCartItemQuantity } = cartSlice.actions

export const selectCart = (state: RootState) => state.user.cart

export const cartReducer = cartSlice.reducer
