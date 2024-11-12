import React, { useState } from "react";
import { Search, Menu } from "lucide-react";
import LoginModal from "./loginModal";
import useProfile from "../../store/usProfile";
import { User} from 'lucide-react';

export default function LandingHeader() {

  const [location, setLocation] = useState("Your Location")
  const [showLoginModal, setShowLoginModal] = useState(false);

  const getProfile = useProfile((state) => state.getProfile);
  const profileData = getProfile();

  console.log(profileData);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  
  function showPosition(position) {

    getCityFromCoords(position.coords.latitude, position.coords.longitude)
    .then(location => {
      console.log("location",location)

      if(location.city){
        setLocation(location.city)}
    });
   // console.log(position.coords.latitude, position.coords.longitude);
  }

  async function getCityFromCoords(lat, lon) {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
        );
        const data = await response.json();
        console.log(data);
        return {
            city: data.address.state_district
            ,
            country: data.address.country,
            state: data.address.state
        };
    } catch (error) {
        console.error("Error fetching location:", error);
        throw error;
    }
}


  return (
    <nav className="flex items-center justify-between px-3 py-1.5 bg-white shadow-2xl">

      {/* Login Modal */}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
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
          <button onClick={getLocation}>{location}</button>
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


{

  profileData ? (<>
   <div className="inline-flex items-center gap-3 px-4 py-1   cursor-pointer">
      {/* Avatar Circle */}
      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
        <User className="w-5 h-5 text-gray-400" />
      </div>
      
      {/* Greeting Text */}
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">Hi,</span>
        <span className="text-sm font-medium font-montserrat text-gray-700">{profileData.name}...</span>
      </div>

    
    </div>
  
  </>) :(<>
  
  <button onClick={()=> setShowLoginModal(true)} className="px-4 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600">
          Sign in
        </button>
        
         </>)
}
        

        <button className="p-1">
          <Menu className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </nav>
  );
}
