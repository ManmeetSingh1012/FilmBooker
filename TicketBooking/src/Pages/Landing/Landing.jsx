import LandingHeader from "../../Components/Layout/LandingHeader";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import RecommendedMovies from "../../Components/Layout/RecomendedMovies";
import PremiereMovies from "../../Components/Layout/PremiereMovies";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import useMovieHooks from "../../hooks/useMovieHooks";

const styles = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default function Landing() {
  const { movies, getMovies } = useMovieHooks();
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  const [movie, setMovies] = useState([]);

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },

    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      text: "Your next credit card gets you 24 free tickets!",
      buttonText: "Apply Now",
      imageUrl:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg",
    },
    {
      text: "Exclusive offers on movies, sports, and events!",
      buttonText: "Learn More",
      imageUrl:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1730297705769_maroon51240x300a.jpg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <div className="min-h-screen">
      <LandingHeader />

      {/* Navigation Bar */}
      <div className="">
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-50 ">
          <div className="flex space-x-6 text-gray-800">
            <a href="#" className="hover:text-red-600 font-montserrat text-sm">
              Movies
            </a>
            <a href="#" className="hover:text-red-600 font-montserrat text-sm">
              Stream
            </a>
            <a href="#" className="hover:text-red-600 font-montserrat text-sm">
              Events
            </a>
            <a href="#" className="hover:text-red-600 font-montserrat text-sm">
              Plays
            </a>
            <a href="#" className="hover:text-red-600 font-montserrat text-sm">
              Sports
            </a>
            <a href="#" className="hover:text-red-600 font-montserrat text-sm">
              Activities
            </a>
          </div>

          <div className="flex space-x-6 text-gray-800">
            <a href="#" className="hover:text-red-600 font-montserrat text-sm">
              ListYourShow
            </a>
            <a href="#" className="hover:text-red-600 font-montserrat text-sm">
              Corporates
            </a>
            <a href="#" className="hover:text-red-600 font-montserrat text-sm">
              Offers
            </a>
            <a href="#" className="hover:text-red-600 font-montserrat text-sm">
              Gift Cards
            </a>
          </div>
        </nav>

        {/* Carousel */}
        <div
          {...handlers}
          className="relative w-full  mx-auto mt-1 overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex-shrink-0 relative p-2 rounded-md"
              >
                <img
                  src={slide.imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg text-gray-500 hover:bg-gray-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a1 1 0 01-.7-1.7l7-7-7-7a1 1 0 111.4-1.4l7 7a1 1 0 010 1.4l-7 7a1 1 0 01-.7.3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg text-gray-500 hover:bg-gray-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a1 1 0 01-.7-1.7l7-7-7-7a1 1 0 111.4-1.4l7 7a1 1 0 010 1.4l-7 7a1 1 0 01-.7.3z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-2">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  currentIndex === index ? "bg-red-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Movies */}

      <style>{styles}</style>
      <RecommendedMovies movies={movies} />

      <PremiereMovies />

      <footer className="w-full bg-gray-800 text-gray-400">
        {/* Logo Section */}
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-center mb-6">
            <a href="/" className="text-2xl font-bold text-white">
              film<span className="text-red-600">Booker</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                  aria-label={link.name}
                >
                  <IconComponent className="w-5 h-5 text-gray-300" />
                </a>
              );
            })}
          </div>

          {/* Copyright Text */}
          <div className="text-center text-sm">
            <p className="mb-2">
              Copyright © {new Date().getFullYear()} Your Company Name. All
              Rights Reserved.
            </p>
            <p className="max-w-4xl mx-auto text-xs leading-relaxed">
              The content and images used on this site are copyright protected.
              Unauthorized use is prohibited and punishable by law.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
