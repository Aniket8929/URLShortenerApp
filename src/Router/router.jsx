import App from "@/App";
import LoginForm from "@/Auth/LoginForm";
import SignupForm from "@/Auth/SignupForm";
import Dashboard from "@/Pages/Dashboard";
import HeroSection from "@/Pages/HeroSection";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { AuthLayout } from "@/Auth/Auth.layout";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HeroSection />,
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