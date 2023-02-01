import thunk from "redux-thunk"
import storage from "redux-persist/lib/storage"
import { configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import { rootReducer } from "./rootReducer"
import { baseApi } from "./api/base.api"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: [thunk, baseApi.middleware] as const,
})

export type RootState = ReturnType<typeof store.getState>
