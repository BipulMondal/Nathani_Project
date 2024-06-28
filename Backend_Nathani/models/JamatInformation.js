const mongoose = require("mongoose");

const jamatinfo = new mongoose.Schema({
    jamatInfo: {
      aadharNo: {type: String, default :"", required: true},
        ifMemon: { type: String, default: "" },
        ifMotherMomen: { type: String, default: "" },
        memonJamatLetterOne: { type: String, default: "" },
        memonJamatLetterTwo: { type: String, default: "" },
        jamatDetails: { type: String, default: "" },
        belongingJamat: { type: String, default: "" },
        jamatSecretaryName: { type: String, default: "" },
        secretaryMobile: { type: Number },
        secretaryEmail: { type: String, default: "" },
        memonAddress: { type: String, default: "" },
        memonCity: { type: String, default: "" },
        memonPin: { type: String, default: "" },
        memonState: { type: String, default: "" },
        helpFromJamat: { type: String, default: "" },
        jamatReceiveAmount: { type: Number },
        amountReceivePurpose: { type: String, default: "" },
        amountType: { type: String, default: "" },
        deeniyatCourse: { type: String, default: "" },
        courseName: { type: String, default: "" },
        madrashaName: { type: String, default: "" },
        anyOtherCourse: { type: String, default: "" },
      },
})

module.exports = mongoose.model("jamatInfo", jamatinfo)