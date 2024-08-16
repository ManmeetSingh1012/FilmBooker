import { Router } from "express";
import { get_city , get_tier , get_movie , get_screens , get_screenshowtimming , get_theater } from "../controller/seat.get.controller";
const seatgetrouter:Router = Router();   



seatgetrouter.route("/getcity").post(get_city)
seatgetrouter.route("/gettheater").post(get_theater)
seatgetrouter.route("/getscreens").post(get_screens)
seatgetrouter.route("/getscreenshowtimming").post(get_screenshowtimming)
seatgetrouter.route("/getmovie").post(get_movie)
seatgetrouter.route("/gettier").post(get_tier)






export default seatgetrouter;