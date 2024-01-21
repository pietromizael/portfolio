import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import App from "./App.jsx";
import Start from "./routes/Start.jsx";
import Home from "./routes/Home.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence mode="wait">
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AnimatePresence>
  </React.StrictMode>
);
