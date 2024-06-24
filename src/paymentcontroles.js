import { paymentModel } from "../database/modules/payment.module.js";

const allUser = async (req, res) => {
  try {
    const payment = await paymentModel.find({});
    res.json({ sucess: true, data: payment });
  } catch (error) {
    console.log(error);
    res.json({ message: "errorrrr" });
  }
};

const removeUser = async (req, res) => {
  try {
    const payment = await paymentModel.findById(req.body.email);

    await paymentModel.findByIdAndDelete(req.body.email);
    res.json({ sucess: true, message: "remove " });
  } catch (error) {
    console.log(error);
    res.json({ message: "error" });
  }
};
const addUserPay = async (req, res) => {
  const userpay = new paymentModel({
    name: req.body.name,
    courseName: req.body.courseName,
    courseprice: req.body.courseprice,
    Address: req.body.Address,
    email: req.body.email,
    sn_id: req.body.sn_id,
  });
  try {
    await userpay.save();
    res.json({ sucess: true, message: "user add" });
  } catch (error) {
    console.log(error);
    res.json({ message: "error" });
  }
};
const getuser = async (req, res) => {
  const { email } = req.body;

  try {
    const emailExists = await paymentModel.findOne({ email });
    if (emailExists) {
      return res.json({ message: "eamil is exists" });
    }
  } catch (error) {
    res.json({ message: "Erroe" });
  }
  res.json({ sucess: true, message: "app sucess " });
};
export { addUserPay, allUser, removeUser, getuser };
