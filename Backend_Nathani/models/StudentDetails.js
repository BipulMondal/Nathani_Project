const mongoose = require("mongoose");

const studentDetails = new mongoose.Schema({
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "registrations", // This should be the name of the model you're referencing
  },
  aadharNo: { type: String, default: "" },
  lastName: { type: String, default: "" },
  firstName: { type: String, default: "" },
  fatherName: { type: String, default: "" },
  motherName: { type: String, default: "" },
  guardianName: { type: String, default: "" },
  dob: { type: String },
  birthPlace: { type: String, default: "" },
  gender: { type: String, default: "" },
  maritalStatus: { type: String, default: "" },
  spouseName: { type: String, default: "" },
  StudentMobileNo: { type: Number },
  StudentEmail: { type: String, default: "" },
  parmanentAddress: { type: String, default: "" },
  currentAddress: { type: String, default: "" },
  landMark: { type: String, default: "" },
  city: { type: String, default: "" },
  pin: { type: String, default: "" },
  district: { type: String, default: "" },
  state: { type: String, default: "" },
  country: { type: String, default: "" },
  physicalChallange: { type: String, default: "" },
  physicalChallangeImg: { type: String, default: "" },
  orphan: { type: String, default: "" },
  parentDeathCertificateImg: { type: String, default: "" },
  addaharFrontImg: { type: String, default: "" },
  aadharBackImg: { type: String, default: "" },
  rationFrontImg: { type: String, default: "" },
  rationBackImg: { type: String, default: "" },
  electricityBillImg: { type: String, default: "" },
  category: { type: String, default: "" },
  zakatFund: { type: Number },
  refferedBy: { type: String, default: "" },
  refMobileNo: { type: String, default: "" },


  studentCode: { type: String, default: "" },
  isConfirm: { type: Boolean, default: false },
  saveAsDraft: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  formAcceptStatus: { type: Boolean, default: false },
  updatedStatus: { type: Boolean, default: false },
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model("studentDetails", studentDetails);
