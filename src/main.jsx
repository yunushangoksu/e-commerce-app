import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import StorePage from "./pages/StorePage.jsx";
import "./index.css";
import GameDetail from "./components/GameDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/store",
    element: <StorePage />,
  },
  {
    path: "/game/:name",
    element: <GameDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
