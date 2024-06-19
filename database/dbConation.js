import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://payment:payment@cluster0.0xbwgr8.mongodb.net/payment"
    )
    .then(() => {
      console.log("db Connection");
    })
    .catch((err) => {
      console.log("error");
    });
};
