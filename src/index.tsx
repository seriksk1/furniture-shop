import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import "./index.pcss"

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)
