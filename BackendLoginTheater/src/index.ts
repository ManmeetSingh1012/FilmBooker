import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { connectDB } from "./data/database/database";
import app from "./app";
//import emailService from "./services/emailservice.worker";

connectDB()
  .then(() => {
    //emailService();
    app.listen(process.env.port || 4000, () => {
      console.log(`Server is running on port ${process.env.port || 4000}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
