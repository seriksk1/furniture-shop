import thunk from "redux-thunk"
import storage from "redux-persist/lib/storage"
import { configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import { rootReducer } from "./rootReducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
