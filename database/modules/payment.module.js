import mongoose from "mongoose";
// الجدول بناع اليوسر علشان تسجيل البيانات
const paymentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  courseName: {
    type: String,
    require: true,
    unique: true,
  },
  sn_id: {
    type: String,
    require: true,
  },
  email: {
    type: String,

    require: true,
  },
  courseprice: {
    type: Number,
    require: true,
  },
  Address: {
    type: String,
    require: true,
  },
});

export const paymentModel = mongoose.model("payment", paymentSchema);
