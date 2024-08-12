import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout } from "../layout/auth";
import LoginPage from "../pages/login";
import ProtectedRoute from "../layout/protected";
import { AuthProvider } from "../hooks/useAuth";
import HomePage from "../pages/home";
import { homeLoader } from "../pages/home/HomeLoader";

export default createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <ProtectedRoute />
      </AuthProvider>
    ),
    path: "/",
    children: [
      {
        element: <HomePage />,
        loader: homeLoader,
        path: "/",
      },
      ...["/home"].map((path) => {
        return {
          path,
          element: <Navigate to="/" replace />,
        };
      }),
    ],
  },
  {
    element: (
      <AuthProvider>
        <AuthLayout />
      </AuthProvider>
    ),
    path: "/",
    children: [
      {
        element: <LoginPage />,
        path: "/login",
      },
    ],
  },
]);
