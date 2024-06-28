import { Movie } from "../models/movie.models";
import { Request, Response } from "express";

const getMoviesData = async (req: Request , res: Response) => {
    

   try{
         const movies = await Movie.find();

         if(movies.length === 0)
         {
            res.status(404).json({message: "No movies found"});
            return;
         }

         res.status(200).json(movies);

   }catch(error){
         if(error instanceof Error)
         {
            res.status(500).json({message: error.message});
            console.log(error.message);
         }
         
   }
}

const updateMovieData = async (req: Request , res: Response) => {

   try{
         const  id  = req.params.id;
         const { mainposter, backposter, title, aboutmovie, language, releasedate, rating, duration, genre, crew, cast, likes, screen, location, age, comments } = req.body;

         const movie = await Movie.findById({ _id:id });

         if(!movie)
         {
            res.status(404).json({message: "Movie not found"});
            return;
         }


         const updatedMovie = await Movie.findByIdAndUpdate(
            {_id:id},
            { $set: { mainposter, backposter, title, aboutmovie, language, releasedate, rating, duration, genre, crew, cast, likes, screen, location, age, comments } },
            { new: true } // Return the updated document
        );
    
        if (!updatedMovie) {
            res.status(400).json({ message: "Movie not updated" });
            return;
        }

         res.status(200).json({message: "Movie updated successfully"});
   }catch(error){
         if(error instanceof Error)
         {
            res.status(500).json({message: error.message});
            console.log(error.message);
         }
   }
    
}

const deleteMovieData = async (req: Request , res: Response) => {

   try{
         const  id  = req.params.id;

         const movie = await Movie.findOne({ _id:id });
         if(!movie)
         {
            res.status(404).json({message: "Movie not found"});
            return;
         }

         const deletemovie = await Movie.deleteOne({ _id:id });

         if(!deletemovie)
         {
            res.status(400).json({message: "Movie not deleted"});
            return;
         }

         res.status(200).json({message: "Movie deleted successfully"});

      }catch(error)
      {
         if(error instanceof Error)
         {
            res.status(500).json({message: error.message});
            console.log(error.message);
         }
      
      }

    
}

const addMovieData = async (req: Request , res: Response) => {

   try{

      const {  mainposter, backposter, title, aboutmovie, language, releasedate, rating, duration, genre, crew, cast, likes, screen, location, age, comments } = req.body;

      

      const newmovie = await Movie.create({ mainposter, backposter, title, aboutmovie, language, releasedate, rating, duration, genre, crew, cast, likes, screen, location, age, comments });
      
      if(!newmovie)
      {
         res.status(400).json({message: "Movie not added"});
         return;
      }

      res.status(200).json({message: "Movie added successfully"});


   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(500).json({message: error.message});
         console.log(error.message);
      }
   }
    
}

const getMovieDataById = async (req: Request , res: Response) => {

   try{
         const  id  = req.params.id;

         const movie = await Movie.findById({ _id:id });

         if(!movie)
         {
            res.status(404).json({message: "Movie not found"});
            return;
         }

         res.status(200).json(movie);

   }catch(error){
         if(error instanceof Error)
         {
            res.status(500).json({message: error.message});
            console.log(error.message);
         }
   }
    
}

export { getMoviesData, updateMovieData, deleteMovieData, addMovieData, getMovieDataById }