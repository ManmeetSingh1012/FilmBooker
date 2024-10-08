import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Landing() {
  const token = useSelector((state) => state.user.token);

  const navigate = useNavigate();

  const navigateTo = () => {
    token ? navigate("/dashboard") : navigate("/signup");
  };
  return (
    <div className="flex flex-wrap flex-col justify-center items-center mt-10">
      <div class="flex items-center justify-center ">
        <h1 class="font-['Playfair_Display'] text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Film<span class="text-gray-800">Booker</span>
        </h1>
      </div>

      <h1 className="text-center text-3xl  text-gray-900 mt-10">
        Welcome to Theater Admin Dashboard
      </h1>

      {token ? (
        <button
          onClick={navigateTo}
          className="bg-orange-500 text-white px-6 py-3 mt-5 w-fit rounded-lg  hover:bg-orange-600 transition-colors duration-300"
        >
          {"Dashboard"}{" "}
        </button>
      ) : (
        <button
          onClick={navigateTo}
          className="bg-orange-500 text-white px-6 w-fit mt-5 py-3 rounded-lg  hover:bg-orange-600 transition-colors duration-300"
        >
          {"Signin"}{" "}
        </button>
      )}
    </div>
  );
}
