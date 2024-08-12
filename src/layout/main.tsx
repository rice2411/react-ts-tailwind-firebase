import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <Outlet />
      </div>
    </div>
  );
};
