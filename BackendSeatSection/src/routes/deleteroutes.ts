import { Router } from "express";
import { delete_city , delete_movie , delete_screens ,delete_screenshowtimming , delete_theater , delete_tier } from "../controller/seat.delete.controller";
const seatdeleterouter:Router = Router();   



seatdeleterouter.route("/deletecity").post(delete_city)
seatdeleterouter.route("/deletetheater").post(delete_theater)
seatdeleterouter.route("/deletescreens").post(delete_screens)
seatdeleterouter.route("/deletescreenshowtimming").post(delete_screenshowtimming)
seatdeleterouter.route("/deletemovie").post(delete_movie)
seatdeleterouter.route("/deletetier").post(delete_tier)






export default seatdeleterouter;