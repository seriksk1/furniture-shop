import React from "react"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes/AppRoutes"
import { store } from "./store/store"
import "react-toastify/dist/ReactToastify.css"
import "./index.pcss"

const container = document.getElementById("root")
const root = createRoot(container!)

let persistor = persistStore(store)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
