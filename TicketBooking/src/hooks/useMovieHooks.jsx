import { useState } from "react";

import axios from "axios";

export default function useMovieHooks() {
  const [movies, setMoviesData] = useState();

  const getMovies = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_MOVIE_API}/movie/getmoviesdata`
      );
      console.log(response.data);
      setMoviesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    movies,
    getMovies,
  };
}
