import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { appPaths } from "../../constants"
import { selectAuth } from "../../store/slices"

interface ProtectedRouteProps {
  redirectPath?: string
}

export const ProtectedRoute = ({ redirectPath = appPaths.auth }: ProtectedRouteProps) => {
  const { token } = useSelector(selectAuth)

  if (!token) {
    return <Navigate to={redirectPath} />
  }

  return <Outlet />
}
