import { Router } from "express";
import { add_city , add_movie , add_screens , add_screenshowtimming , add_theater , add_tier  } from "../controller/seat.add.controller";
import { Request , Response } from "express";
const seatrouter:Router = Router();   



seatrouter.route("/addcity").post(add_city)
seatrouter.route("/addtheater").post(add_theater)
seatrouter.route("/addscreens").post(add_screens)
seatrouter.route("/addscreenshowtimming").post(add_screenshowtimming)
seatrouter.route("/addmovie").post(add_movie)
seatrouter.route("/addtier").post(add_tier)






export default seatrouter;