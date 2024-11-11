import { useState } from "react";

import axios from "axios";

export default function useMovieHooks() {
  const [movies, setMoviesData] = useState();
  const [premiumMovies, setPremiumMovies] = useState();

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

  const getpremiumMovies = async () => { 

    try{

      const response = await axios.get(`${import.meta.env.VITE_MOVIE_API}/premium_movie/premium_movies`)
      console.log(response.data);
      setPremiumMovies(response.data);
    }catch(error){
      console.log(error);
    }
  }

  return {
    movies,
    getMovies,
    premiumMovies,
    getpremiumMovies
  };
}
