import mongoose, { Document , CallbackError } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface UserData extends Document {
  name: string | null;
  email: string;
  password: string;
  phoneNo: string | null;
  verificationCode: number | null;
  isVerified: boolean;
  authType: string;
  generateToken: () => string;
  isPasswordMatch: (password: string) => Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserData>(
  {
    name: {
      type: String,
      default: null,
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
    password: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      default: null,
    },
    verificationCode: {
      type: Number,
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    authType: {
      type: String,
      enum: ["email", "google"],
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      const saltRounds = Number(process.env.SALT_ROUNDS) || 8;
      this.password = await bcrypt.hash(this.password, saltRounds);
    } catch (error) {
        return next(error as CallbackError); // Explicitly cast error
    }
  }
  next();
});

userSchema.methods.isPasswordMatch = async function (password: string) {
  return bcrypt.compare(password, (this as UserData).password);
};

userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET!,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1h",
    }
  );
};

export const User = mongoose.model<UserData>("User", userSchema);
export { UserData };
