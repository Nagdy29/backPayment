import express from "express";
import {
  addUserPay,
  allUser,
  getuser,
  removeUser,
} from "./paymentcontroles.js";

const payRouter = express.Router();

payRouter.post("/add", addUserPay);
payRouter.get("/list", allUser);
payRouter.post("/remove", removeUser);
payRouter.get("/:email", getuser);

export default payRouter;
