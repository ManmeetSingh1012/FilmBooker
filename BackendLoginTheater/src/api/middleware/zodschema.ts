import { z } from "zod";

export const UserSchema = z.object({
  username: z.string().min(2).max(255),
  email: z.string().email(),
  password: z.string().min(5).max(255),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(255),
});
