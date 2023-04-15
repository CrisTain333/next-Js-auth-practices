import mongoose, { ConnectOptions } from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
      } as ConnectOptions)
      .then((res) => {
        console.log("Connected to API Database");
      })
      .catch((err) => {
        console.log(`Database connection error occurred -`, err);
      });
  } catch (error: any) {
    console.error(error?.message);
    process.exit(1);
  }
};
