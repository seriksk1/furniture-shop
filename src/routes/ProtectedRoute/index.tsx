import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { appPaths } from "../../constants"

interface ProtectedRouteProps {
  redirectPath?: string
}

export const ProtectedRoute = ({ redirectPath = appPaths.login }: ProtectedRouteProps) => {
  //should be replaced with the real state from the store
  const authorized = true

  if (!authorized) {
    return <Navigate to={redirectPath} />
  }

  return <Outlet />
}
