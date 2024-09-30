import { User } from "../../data/models/user.model";
import { Request, Response } from "express";
import { userdata } from "../../data/models/user.model";
import producer from "../../messaging/producer";
import { Types } from "mongoose";

const TokenGenerator = async (
  userId: Types.ObjectId
): Promise<string | null> => {
  try {
    console.log("id", userId);

    const user: userdata | null = await User.findById(userId);

    if (!user) {
      console.log("User not found");
      return null;
    }

    const accessToken = user.genratetoken(); // Corrected spelling

    if (!accessToken) {
      console.log("Failed to generate token");
      return null;
    }

    return accessToken;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

const signup = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const check_user = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });

    if (check_user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const new_user = await User.create({
      username,
      email,
      password,
      verificationCode: code,
    });

    const tokenPromise: Promise<string | null> = TokenGenerator(new_user._id);
    const token = await tokenPromise;

    if (new_user) {
      if (!token) {
        return res.status(500).json({ message: "Failed to generate token" });
      }

      console.log("Token", token);
      new_user.token = token;
      new_user.save();
    }

    if (new_user) {
      const data = JSON.stringify({
        email: email,
        code: code,
      });

      producer(data);
      //send_mail(code);

      const signedInUser = await User.findById(new_user._id).select([
        "-password",
        "-verificationCode",
      ]);

      return res
        .status(201)
        .json({ message: "User created", user: signedInUser });
    } else {
      return res.status(400).json({ message: "User not created" });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const check_user = (await User.findOne({ email: email })) as userdata;

    if (!check_user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!check_user.isVerified) {
      return res.status(400).json({ message: "User not verified" });
    }

    const isMatch = check_user.ispasswordMatch(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ message: "Login success" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

const logout = async (req: Request, res: Response) => {};

const verify = async (req: Request, res: Response) => {
  try {
    const { email, code } = req.body;

    const check = await User.findOne({ email: email });

    if (!check) {
      return res.status(400).json({ message: "Something went wrong" });
    }

    if (check.verificationCode === code) {
      check.isVerified = true;
      check.verificationCode = null;
      await check.save();
      return res.status(200).json({ message: "User verified" });
    } else {
      return res.status(400).json({ message: "Invalid code" });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

const getuser = async (req: Request, res: Response) => {};

export { signup, login, logout, verify, getuser };
