import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./AuthContext"

export function AuthLayout() {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <Outlet />
  )
}
