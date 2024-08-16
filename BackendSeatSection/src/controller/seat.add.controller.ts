import { PrismaClient, Prisma } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const add_city = async (req: Request, res: Response) => {
  try {
    const { city_name, zip_code } = req.body;
    console.log(city_name, zip_code);

    let city: Prisma.CityCreateInput = {
      city_name: city_name,
      zip_code: zip_code,
    };

    const city_created = await prisma.city.create({ data: city });

    if (city_created) {
      res.status(200).json({ message: "city added successfully" });
    } else {
      res.status(400).json({ message: "city not added" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

const add_theater = async (req: Request, res: Response) => {
  try {
    const { theater_name, theater_location, total_screen, city_id } = req.body;
    console.log(theater_name, theater_location, total_screen, city_id);

    let theater: Prisma.TheaterCreateInput = {
      theater_location: theater_location,
      theater_name: theater_name,
      total_screen: total_screen,
      city: {
        connect: { city_id: city_id }, // Use the "connect" keyword to link to an existing city by city_id
      },
    };

    const theater_created = await prisma.theater.create({ data: theater });

    if (theater_created) {
      res.status(200).json({ message: "theater added successfully" });
    } else {
      res.status(400).json({ message: "theater not added" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

const add_screens = async (req: Request, res: Response) => {
  try {
    const { screen_name, total_seats, theater_id } = req.body;
    console.log(screen_name, total_seats, theater_id);

    let screen: Prisma.ScreenCreateInput = {
      screen_name: screen_name,
      total_seats: total_seats,
      theater: {
        connect: { theater_id: theater_id },
      },
    };

    const screen_created = await prisma.screen.create({ data: screen });

    if (screen_created) {
      res.status(200).json({ message: "screen added successfully" });
    } else {
      res.status(400).json({ message: "screen not added" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

const add_tier = async (req: Request, res: Response) => {
  try {
    const { tier_name, price, seat_start_range, seat_end_range, screen_id } =
      req.body;

    console.log(tier_name, price, seat_start_range, seat_end_range, screen_id);

    let tier: Prisma.TierCreateInput = {
      tier_name: tier_name,
      price: price,
      seat_start_range: seat_start_range,
      seat_end_range: seat_end_range,
      screen: {
        connect: { screen_id: screen_id },
      },
    };

    const tier_created = await prisma.tier.create({ data: tier });

    if (tier_created) {
      res.status(200).json({ message: "tier added successfully" });
    } else {
      res.status(400).json({ message: "tier not added" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

const add_movie = async (req: Request, res: Response) => {
  try {
    const { movie_name } = req.body;

    console.log(movie_name);

    let movie: Prisma.MovieCreateInput = {
      movie_name: movie_name,
    };

    const movie_created = await prisma.movie.create({ data: movie });

    if (movie_created) {
      res.status(200).json({ message: "movie added successfully" });
    } else {
      res.status(400).json({ message: "movie not added" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

const add_screenshowtimming = async (req: Request, res: Response) => {
  try {
    const { start_time, end_time, screen_id, movie_id } = req.body;

    console.log(start_time);

    let showtimming: Prisma.ScreenShowTimingCreateInput = {
      start_time: start_time,
      end_time: end_time,
      screen: {
        connect: { screen_id: screen_id },
      },
      movie: {
        connect: { movie_id: movie_id },
      },
    };

    const showtimming_created = await prisma.screenShowTiming.create({
      data: showtimming,
    });

    if (showtimming_created) {
      res
        .status(200)
        .json({ message: "showtimming_created added successfully" });
    } else {
      res.status(400).json({ message: "showtimming_created not added" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export {
  add_city,
  add_movie,
  add_screens,
  add_screenshowtimming,
  add_theater,
  add_tier,
};
