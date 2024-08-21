import { Request, Response, NextFunction } from "express";
import { UserSchema, loginSchema } from "./zodschema";

const authvalidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    UserSchema.parse(req.body);

    next();
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const loginvalidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    loginSchema.parse(req.body);

    next();
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export { authvalidation, loginvalidation };
