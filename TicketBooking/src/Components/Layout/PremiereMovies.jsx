import React, { useRef, useState } from "react";
import { ChevronRight, ChevronLeft, Play } from "lucide-react";

const PremiereLogo = () => (
  <div className="flex items-center gap-4 mb-8">
    <div className="bg-red-500 rounded-full p-3">
      <Play className="w-8 h-8 text-white" fill="white" />
    </div>
    <div>
      <h1 className="text-2xl font-bold text-white uppercase tracking-wide">
        Premiere
      </h1>
      <p className="text-gray-400 text-sm">
        Watch new movies at home, every Friday
      </p>
    </div>
  </div>
);

const PremiereCard = ({ movie }) => (
  <div className="relative flex-shrink-0 w-64 group">
    <div className="relative rounded-lg overflow-hidden">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="w-full h-[380px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded font-medium">
        PREMIERE
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent pt-12 pb-4 px-3">
        <h3 className="text-white text-lg font-semibold mb-1">{movie.title}</h3>
        <p className="text-gray-300 text-sm">{movie.language}</p>
      </div>
    </div>
  </div>
);

const PremiereMovies = () => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const movies = [
    {
      id: 1,
      title: "Yolo",
      language: "Mandarin",
      imageUrl: "/api/placeholder/256/380",
    },
    {
      id: 2,
      title: "The Defenders",
      language: "English",
      imageUrl: "/api/placeholder/256/380",
    },
    {
      id: 3,
      title: "Speak No Evil",
      language: "English",
      imageUrl: "/api/placeholder/256/380",
    },
    {
      id: 4,
      title: "Strange Darling",
      language: "English",
      imageUrl: "/api/placeholder/256/380",
    },
    {
      id: 5,
      title: "The Line (2023)",
      language: "English",
      imageUrl: "/api/placeholder/256/380",
    },
    {
      id: 6,
      title: "Movie 6",
      language: "English",
      imageUrl: "/api/placeholder/256/380",
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = direction === "left" ? -300 : 300;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    // Update button visibility after scroll
    setTimeout(() => {
      const isStart = container.scrollLeft === 0;
      const isEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10;
      setShowLeftButton(!isStart);
      setShowRightButton(!isEnd);
    }, 300);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    const isStart = container.scrollLeft === 0;
    const isEnd =
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 10;

    setShowLeftButton(!isStart);
    setShowRightButton(!isEnd);
  };

  return (
    <div className=" bg-[#1f2937] p-4">
      <div className="max-w-7xl mx-auto">
        <PremiereLogo />

        <div className="mb-4">
          <h2 className="text-white text-lg font-montserrat font-semibold">
            Premieres
          </h2>
          <p className="text-gray-400 text-sm">
            Brand new releases every Friday
          </p>
        </div>

        <div className="relative group">
          {showLeftButton && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto no-scrollbar pb-4"
          >
            {movies.map((movie) => (
              <PremiereCard key={movie.id} movie={movie} />
            ))}
          </div>

          {showRightButton && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PremiereMovies;
