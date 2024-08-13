import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export const MainLayout = () => {
  return (
    <div className="flex flex-col  min-h-screen bg-gray-100 ">
      <Header />
      <div className="bg-white  rounded-lg shadow-md min-w-screen ">
        <Outlet />
      </div>
    </div>
  );
};
