import express ,{Express, Request, Response} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app: Express = express();




/* These below app.use are middlewares settings that is reauired before actual code  , to know more see docs */

// configure cors : middleware 
// origin : will tell the server to allow requests from this origin
app.use(cors({
   origin: "*",
   credentials: true
}));

// another middleware : to accept json data
app.use(express.json({
limit : "1mb"
}));

// middleware to deal with data in url
app.use(express.urlencoded({ extended: true }));

// middleware to deal with static files : we passed file name
app.use(express.static("temp"));

// middleware to deal with cookies
app.use(cookieParser());

//with req ,res in api we have next and err , next is flag for middleware : used jwt 

// Routes Declration


import seatrouter from "./routes/addroutes";
import seatgetrouter from "./routes/getroutes";
import seatdeleterouter from "./routes/deleteroutes";

app.use("/api/v1/movieseatsection/add", seatrouter);
app.use("/api/v1/movieseatsection/get", seatgetrouter);
app.use("/api/v1/movieseatsection/delete", seatdeleterouter);



app.get('/', (_: Request, res: Response) => {
   res.send('Express + TypeScript test Server using prisma and sql');
});

export default app;