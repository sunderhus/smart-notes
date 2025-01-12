import React from "react";
import ReactDOM from "react-dom/client";
import "@/presentation/assets/index.css";
import { Toaster } from "sonner";
import { Router } from "@/main/routes/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
    <Toaster richColors closeButton position="top-right" />
  </React.StrictMode>
);
