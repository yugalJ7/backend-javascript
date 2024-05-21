import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/connect.js";
import { app } from "./app.js";
dotenv.config({ path: "./env" });
// const app = express();

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("Error in listening", err);
      throw err;
    });
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is listening on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed", err);
  });

//IIFE(Immediately Invoked Function Expression) - that run soon as it is defined SYNTAX=(() => {})();
/* One of the approach to connect DB connect another one is to import from other file
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
    app.on("error", (error) => {
      console.log("Error APP.on", error);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR : ", error);
    throw err;
  }
})();
*/
