import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

import app from './app';

import ConnectDB from './database/database';


ConnectDB().then(() => {

      console.log("Connected to database");

      app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
      })

}).catch((error) => {
      console.log(error);

      app.route('/').get((_req: Request, res: Response) => {
            res.status(500).json({ message: "Internal server error" })})
      
})














