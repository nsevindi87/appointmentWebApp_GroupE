import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage";
import AppointmentPage from "./Components/AppointmentPage";
import Profile from "./Components/Profile";
import LoginSignup from "./Components/LoginSignup";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "appointment",
        element: <AppointmentPage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "login",
        element: <LoginSignup />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
