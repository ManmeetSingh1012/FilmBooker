import { movieSchema } from "../validators/movie-validators";
import { Request, Response, NextFunction } from "express";
import { ZodError } from 'zod';
const validate =  async (req:Request, res:Response, next:NextFunction) => {


   try{
         console.log(req.body);
         const moviedata = await movieSchema.parseAsync(req.body);
         req.body = moviedata;
         next();
   }catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.errors.map(err => ({
          code: err.code,
          message: err.message,
          path: err.path
        }));
        res.status(400).json({ message: "Validation failed", errors: formattedErrors });
      } else {
        // Handle other types of errors here
        console.error("Validation error:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }


}

export default validate;