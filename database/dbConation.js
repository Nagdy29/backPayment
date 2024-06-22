import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://payment:payment@cluster0.thto9he.mongodb.net/paymennt"
    )
    .then(() => {
      console.log("db Connection");
    })
    .catch((err) => {
      console.log("error");
    });
};
