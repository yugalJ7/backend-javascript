import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log(
      `/n MongoDb is connected |-_-| : ${(await connectionInstance).connection.host}`
    );
  } catch (error) {
    console.log("MongoDb connection FAILED", error);
    process.exit(1);
  }
};

export default connectDB;
