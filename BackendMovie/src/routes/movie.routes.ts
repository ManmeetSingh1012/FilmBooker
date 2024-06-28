import { Router } from "express";
import { getMoviesData , updateMovieData , deleteMovieData , addMovieData , getMovieDataById } from "../controller/movie.controller";
import { get } from "http";
import validate from "../middleware/movie.middleware";
const movie_router = Router();

movie_router.route("/getmoviesdata").get(getMoviesData)
movie_router.route("/updatemoviedata/:id").put(updateMovieData)
movie_router.route("/deletemoviedata/:id").delete(deleteMovieData)
movie_router.route("/addmoviedata").post(validate,addMovieData)
movie_router.route("/getmoviedata/:id").get(getMovieDataById)

export default movie_router
