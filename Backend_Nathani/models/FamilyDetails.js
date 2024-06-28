const mongoose = require("mongoose");

const familyDetails = new mongoose.Schema({
    familyDetails: [{
      aadharNo: {type: String, default :"", required: true},
        parentStatus: { type: String, default: "" },
        parentStatusOneImg: { type: String, default: "" },
        parentStatusTwoImg: { type: String, default: "" },
        relationWithStudent: { type: String, default: "" },
        relationPersonName: { type: String, default: "" },
        relationPersonMaritalStatus: { type: String, default: "" },
        relationPersonDOB: { type: String, default: "" },
        relationPersongender: { type: String, default: "" },
        relationPersonAadhar: { type: String, default: "" },
        relationPersonEducation: { type: String, default: "" },
        relationPersonOccupation: { type: String, default: "" },
        relationPersonOccupationDetails: { type: String, default: "" },
        relationPersonMonthlyIncome: { type: Number },
        incomeFileFrontImg: { type: String, default: "" },
        incomeFileBackImg: { type: String, default: "" },
        handiCapped: { type: String, default: "" },
        handiCapFileOneImg: { type: String, default: "" },
        handiCapFileTwoImg: { type: String, default: "" },
        personCity: { type: String, default: "" },
        personStudying: { type: String, default: "" },
      }],
})

module.exports = mongoose.model("familyDetails", familyDetails)