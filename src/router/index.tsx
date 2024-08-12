import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../layout/auth";
import LoginPage from "../pages/login";

export default createBrowserRouter([
  {
    element: <h1>hehe</h1>,
    path: "/",
  },
  {
    element: <AuthLayout />,
    path: "/",
    children: [
      {
        element: <LoginPage />,
        path: "/login",
      },
    ],
  },
]);
