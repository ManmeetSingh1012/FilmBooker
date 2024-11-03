import React from "react";
import { Search, Menu } from "lucide-react";

export default function LandingHeader() {
  return (
    <nav className="flex items-center justify-between px-3 py-1.5 bg-white shadow-2xl">
      {/* Logo */}
      <div className="flex items-center">
        <div className="text-base font-montserrat text-gray-800">
          <span>film</span>
          <span className="text-red-600">Booker</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl mx-3 relative">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            className="w-full pl-8 pr-3 py-1.5 text-sm bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:border-gray-400"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-0.5 text-gray-700 text-sm">
          <span>Ludhiana</span>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <button className="px-4 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600">
          Sign in
        </button>

        <button className="p-1">
          <Menu className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </nav>
  );
}
