import { Router } from "express";
import premiumController from "../controller/premium_movie.controller";

import premium_validate from "../middleware/premium_movie.middleware";

const premiumMovieRouter = Router();

// Define the base route for premium movies
premiumMovieRouter.route("/premium_movies")
  .get(premiumController.getpremium) // GET all premium movies
  .post(premium_validate, premiumController.addpremium); // POST new premium movie with validation

// Define routes with parameters for specific movie actions
premiumMovieRouter.route("/premium_movies/:id")
  .get(premiumController.getpremiumbyid) // GET a premium movie by ID
  .put(premiumController.updatepremium) // Update a premium movie by ID
  .delete(premiumController.deletepremium); // DELETE a premium movie by ID

export default premiumMovieRouter;
