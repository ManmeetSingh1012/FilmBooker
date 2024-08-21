import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(bodyParser.json());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// middleware to deal with cookies
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Theater Login" });
});
import user from "./api/routes/user.routes";

app.use("/api/v1/theater_manager", user);

export default app;
