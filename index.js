// process دي علشان تهندل اي ايرور من الكتابه ف الكود ففسها منك
process.on("uncaughtException", (err) => {
  console.log("errr", err);
});
import express from "express";
import cors from "cors";
import { dbConnection } from "./database/dbConation.js";
import { appErorr } from "./src/utilis/appError.js";
import payRouter from "./src/payRoutes.js";

const app = express();
app.use(cors());
const port = 4000;
///////////////////////
app.use(express.json());
//////////////
app.use("/cash", payRouter);

dbConnection();
///////////////////////
// handel router علشان url

app.get("/", (req, res) => res.send("welcome"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

process.on("unhandledRejection", (err) => {
  console.log("erorr", err);
});
