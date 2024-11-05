import { Request, Response } from "express";
import { PremiumMovie } from "../models/premium_movies.models";

const getpremium = async (req: Request, res: Response) => {
  try {
    const movies = await PremiumMovie.find();

    if (movies.length === 0) {
      res.status(404).json({ message: "No movies found" });
      return;
    }

    res.status(200).json(movies);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      console.log(error.message);
    }
  }
};

const updatepremium = async () => {};

const deletepremium = async () => {};

const addpremium = async (req: Request, res: Response) => {
  try {
    const {
      mainposter,
      backposter,
      title,
      aboutmovie,
      language,
      releasedate,
      rating,
      duration,
      genre,
      crew,
      cast,
      likes,
      age,
      comments,
    } = req.body;

    const newPremuim = await PremiumMovie.create({
      mainposter,
      backposter,
      title,
      aboutmovie,
      language,
      releasedate,
      rating,
      duration,
      genre,
      crew,
      cast,
      likes,
      age,
      comments,
    });

    if (!newPremuim) {
      res.status(400).json({ message: "Something went wrong" });
    }

    res.status(200).json({ message: "Premium Movie added successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

const getpremiumbyid = async () => {};

const premiumController = {
    getpremium,
    getpremiumbyid,
    addpremium,
    deletepremium,
    updatepremium,
  };
  
  export default premiumController;
