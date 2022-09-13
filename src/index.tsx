import React from "react"
import { Provider } from "react-redux"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { store } from "./store"
import "./index.pcss"

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
)
