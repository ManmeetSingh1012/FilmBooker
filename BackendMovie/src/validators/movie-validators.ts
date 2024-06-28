import { z } from 'zod';

export const movieSchema = z.object({
  mainposter: z.string().url({ message: "Mainposter must be a valid URL" }),
  backposter: z.string().url({ message: "Backposter must be a valid URL" }),
  title: z.string().min(1, { message: "Title cannot be empty" }),
  aboutmovie: z.string().min(1, { message: "About Movie cannot be empty" }),
  language: z.array(z.string()).min(1, { message: "There must be at least one language" }),
  releasedate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Invalid date format, should be YYYY-MM-DD" }),
  rating: z.number().min(0, { message: "Rating must be at least 0" }).max(10, { message: "Rating must be at most 10" }),
  duration: z.string().regex(/^\d+h \d+m$/, { message: "Invalid duration format, should be 'Xh Ym'" }),
  genre: z.array(z.string()).min(1, { message: "There must be at least one genre" }),
  crew: z.array(z.string()).min(1, { message: "There must be at least one crew member" }),
  cast: z.array(z.string()).min(1, { message: "There must be at least one cast member" }),
  likes: z.number().int().min(0, { message: "Likes must be a non-negative integer" }),
  screen: z.array(z.string()).min(1, { message: "There must be at least one screen" }),
  location: z.array(z.string()).min(1, { message: "There must be at least one location" }),
  age: z.string().min(1, { message: "Age rating cannot be empty" }),
  comments: z.array(z.string()).min(1, { message: "There must be at least one comment" })
});

