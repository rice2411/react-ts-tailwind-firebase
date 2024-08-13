import React from "react";
import { logOut } from "../../services/firebase";
import Button from "../Button";
import { useAuth } from "../../hooks/useAuth";

function Header() {
  const { user }: any = useAuth();
  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold">My App</div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-700">
            <p>{user.displayName}</p>
            <p className="text-gray-500">{user.email}</p>
          </div>
          <Button
            text="Logout"
            onClick={logOut}
            className="py-2 px-4 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
