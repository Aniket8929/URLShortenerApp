import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./Router/router";
import { TooltipProvider } from "./components/ui/tooltip";
import { AuthProvider } from "./Auth/AuthContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TooltipProvider>
        <RouterProvider router={AppRouter} />

      </TooltipProvider>
    </AuthProvider>
  </React.StrictMode>
);
