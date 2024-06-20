import { paymentModel } from "../database/modules/payment.module.js";

const allUser = async (req, res) => {
  try {
    const payment = await paymentModel.find({});
    res.json({ success: true, data: payment });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "errorrrr" });
  }
};

const removeUser = async (req, res) => {
  try {
    const payment = await paymentModel.findById(req.body.email);

    await paymentModel.findByIdAndDelete(req.body.email);
    res.json({ success: true, message: "remove " });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};
const addUserPay = async (req, res) => {
  const userpay = new paymentModel({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Username: req.body.Username,
    Total: req.body.Total,
    Address: req.body.Address,
    Email: req.body.Email,
    courseName: req.body.courseName,
  });
  try {
    await userpay.save();
    res.json({ success: true, message: "user add" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
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
