import dotenv from "dotenv";
import connectDB from "./db/connect.js";

dotenv.config({ path: "./env" });

connectDB();

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
