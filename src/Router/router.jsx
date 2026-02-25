import { createBrowserRouter, Navigate } from "react-router-dom";
import SignupForm from "@/Auth/Signupform";
import LoginForm from "@/Auth/Loginform";
import Herosection from "@/Pages/Herosection";
import Dashboard from "@/Pages/Dashboard";
import App from "@/App";
import ProtectedRoute from "./ProtectedRoute";
import { AuthLayout } from "@/Auth/Auth.layout";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Herosection />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/auth/login" />,
          },
          {
            path: "signup",
            element: <SignupForm />,
          },
          {
            path: "login",
            element: <LoginForm />,
          },
        ],
      },
    ],
  },
]);

export default AppRouter;