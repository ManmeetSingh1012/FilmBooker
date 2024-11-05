import React, { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft, ThumbsUp, Star, Info } from "lucide-react";
import movieData from "./movieData";

const MovieCard = ({ movie }) => {
  const [showDescription, setShowDescription] = useState(false);
  const descriptionRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      descriptionRef.current &&
      !descriptionRef.current.contains(event.target)
    ) {
      setShowDescription(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex-shrink-0 w-52 bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="relative h-72">
        <img
          src={movie.mainposter}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <button
          onClick={() => setShowDescription(!showDescription)}
          className="absolute top-2 left-2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Info className="w-4 h-4 text-white" />
        </button>
        {showDescription && (
          <div
            ref={descriptionRef}
            className="absolute inset-0 bg-black/75 p-4 flex items-center justify-center"
          >
            <p className="text-white text-sm">{movie.aboutmovie}</p>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-2 flex items-center justify-between bg-gradient-to-t from-black/90 to-transparent">
          {movie.likes && (
            <div className="flex items-center text-white">
              <ThumbsUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm">{movie.likes}</span>
            </div>
          )}
          {movie.rating && (
            <div className="flex items-center text-white">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="text-sm">{movie.rating}/10</span>
            </div>
          )}
        </div>
      </div>
      <div className="p-2">
        <h3 className="font-normal text-base mb-1 truncate">{movie.title}</h3>
        <p className="text-gray-600 text-xs">{movie.genre.join(" / ")}</p>
      </div>
    </div>
  );
};

export default function RecommendedMovies({ movies }) {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 300;
    container.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
  };

  const updateArrows = () => {
    const container = containerRef.current;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(container.scrollLeft + container.clientWidth < container.scrollWidth);
  };

  useEffect(() => {
    updateArrows(); // Check arrows on initial load
  }, [movies]); // Re-run if movies data changes

  return (
    <div className="p-1 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold font-montserrat mb-6">
          Recommended Movies
        </h2>
        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              style={{ zIndex: 10 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          <div
            ref={containerRef}
            onScroll={updateArrows}
            className="flex space-x-5 px-10 overflow-x-auto no-scrollbar pb-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {movies?.length ? (
              movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            ) : (
              <div className="p-6 text-center">No movies available</div>
            )}
          </div>
          {showRightArrow && (
            <button
              onClick={() => handleScroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              style={{ zIndex: 10 }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
