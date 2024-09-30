import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface userdata extends Document {
  username: string;
  email: string;
  password: string;
  verificationCode: number | null;
  isVerified: boolean;
  token: string;
  genratetoken: () => string;
  ispasswordMatch: (password: string) => boolean;
}

const userschema = new mongoose.Schema<userdata>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: { type: String, required: true },

    verificationCode: { type: Number, required: false },

    isVerified: { type: Boolean, default: false },

    token: { type: String, required: false },
  },
  { timestamps: true }
);

userschema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

userschema.methods.ispasswordMatch = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

userschema.methods.genratetoken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACESS_TOKEN_SECRET!!,
    {
      expiresIn: process.env.ACESS_TOKEN_EXPIREY,
    }
  );
};

export const User = mongoose.model<userdata>("User", userschema);
export { userdata };
