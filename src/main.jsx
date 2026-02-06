import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/router";
import { TooltipProvider } from "./components/ui/tooltip";
import AuthContextProvider from "./Auth/AuthContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TooltipProvider>
        <RouterProvider router={Router}>
        </RouterProvider>
      </TooltipProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
