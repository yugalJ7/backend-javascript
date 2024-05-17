import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({}));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
//using cookie parser to perfoem CRUD operation on user's cookies
app.use(cookieParser());
