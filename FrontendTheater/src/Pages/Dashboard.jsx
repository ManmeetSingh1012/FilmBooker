import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signout } from "../Redux/authslice"; // Assuming you have an auth slice for Redux
import AddCityComponent from "../components/addcitycomponent";
import AddTheaterComponent from "../components/addtheatercomponent";

export default function Dashboard() {
  const [showUserDialog, setShowUserDialog] = useState(false);
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signout());
    navigate("/login");
  };

  return (
    <div className=" bg-mycolor p-5">
      <header className=" bg-white text-gray-800 rounded-lg  p-5 ">
        <div className="container mx-auto flex justify-between items-center">
          {/* Card Printer Text */}
          <div class="flex items-center justify-center ">
            <h1 class="font-['Playfair_Display'] text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Film<span class="text-gray-800">Booker</span>
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* User Icon */}
            <div className="relative">
              <svg
                className="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setShowUserDialog(!showUserDialog)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              {/* User Dialog */}
              {showUserDialog && (
                <div
                  className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-hidden h-full w-full flex items-center justify-center z-50"
                  onClick={() => setShowUserDialog(false)} // Close the dialog when clicking outside
                >
                  <div
                    className="relative mx-auto p-5 border w-full max-w-md max-h-[90vh] shadow-lg rounded-md bg-white overflow-y-auto"
                    onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking inside the dialog
                  >
                    <div className="px-4 py-2 text-sm text-gray-700">
                      {email}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Logout Icon */}
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleLogout}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
        </div>
      </header>

      <div className="bg-white  rounded-lg mt-10">
        <div className="p-5">
          <h1 className="text-center font-medium">
            Welcome To the Film Booker Admin Pannel
          </h1>
        </div>
      </div>

      <div>
        <AddCityComponent />
      </div>

      <div>
        <AddTheaterComponent />
      </div>
    </div>
  );
}
