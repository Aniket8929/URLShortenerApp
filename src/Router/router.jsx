import App from "@/App";
import { AuthLayout } from "@/Auth/Auth.layout";
import Loginform from "@/Auth/Loginform";
import Signup from "@/Auth/SignUp";
import Dashboard from "@/Pages/Dashboard"
import Herosection from "@/Pages/Herosection"

import { createBrowserRouter } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Herosection />
            },
            {
                path: "/dashboard",
                element: <ProtectedRoute> <Dashboard /> </ProtectedRoute>
            },
            {
                path: "/Auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "signup",
                        index: true,
                        element: <Signup />
                    },
                    {
                        path: "login",
                        element: <Loginform />
                    }
                ]
            }
        ]
    }
])

export default Router;