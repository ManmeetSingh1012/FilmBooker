import express ,{Request,Response} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({
   origin: "*",
   credentials: true
}));

// another middleware : to accept json data
app.use(express.json({
limit : "10mb"
}));

// middleware to deal with data in url
app.use(express.urlencoded({ extended: true }));

// middleware to deal with static files : we passed file name
app.use(express.static("temp"));

// middleware to deal with cookies
app.use(cookieParser());


import movie_router from "./routes/movie.routes";

app.use("/api/v1/movie",movie_router);

//with req ,res in api we have next and err , next is flag for middleware : used jwt 
app.get('/', (_: Request, res: Response) => {
   res.send('Express + TypeScript test Server using mongodb');
});


export default app;