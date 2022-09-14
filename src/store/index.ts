import { configureStore } from "@reduxjs/toolkit"
import { userReducer, authReducer } from "./slices"

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
