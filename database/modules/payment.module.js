import mongoose from "mongoose";
// الجدول بناع اليوسر علشان تسجيل البيانات
const paymentSchema = mongoose.Schema({
  FirstName: {
    type: String,
    require: true,
  },
  LastName: {
    type: String,
    require: true,
    unique: true,
  },
  courseName: {
    type: String,
    require: true,
    unique: true,
  },
  Username: {
    type: String,
    require: true,
  },
  Email: {
    type: String,

    require: true,
  },
  Total: {
    type: Number,
    require: true,
  },
  Address: {
    type: String,
    require: true,
  },
});

export const paymentModel = mongoose.model("payment", paymentSchema);
