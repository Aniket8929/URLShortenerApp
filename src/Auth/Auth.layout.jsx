import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function AuthLayout() {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[oklch(0.19_0.06_269.71)] ">
      <div className="w-full max-w-md shadow-lg rounded-lg border-2 p-4 border-white text-white">
        <Outlet />
      </div>
    </div>
  );
}