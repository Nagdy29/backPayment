import express from "express";
import { addUserPay, allUser, removeUser } from "./paymentcontroles.js";

const payRouter = express.Router();

payRouter.post("/add", addUserPay);
payRouter.get("/list", allUser);
payRouter.post("/remove", removeUser);

export default payRouter;
