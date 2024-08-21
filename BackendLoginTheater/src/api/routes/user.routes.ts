import { Router } from "express";
import {
  login,
  logout,
  verify,
  getuser,
  signup,
} from "../controller/user.controller";
import { loginvalidation, authvalidation } from "../middleware/auth.middleware";

const user = Router();

user.route("/signup").post(authvalidation, signup);
user.route("/login").post(loginvalidation, login);
user.route("/logout").get(logout);
user.route("/verify").post(verify);
user.route("/getuser").get(getuser);

export default user;
