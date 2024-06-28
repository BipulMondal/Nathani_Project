const mongoose = require("mongoose")

const organizationSupportFamily = new mongoose.Schema({
    aadharNo: {type: String, default :"", required: true},
    organizationSupportFamily: {
        receivedSupport: { type: String , default: "" },
        supportFamilyDetails: [
          {
            memberName: { type: String, default: "" },
            memberId: { type: String, default: "" },
            course: { type: String, default: "" },
            amountReceived: { type: Number },
            financialYear: { type: String, default: "" },
            howManyYearsGet: { type: Number },
          },
        ],
        memberReceiveSupport: {type: String , default: ""},
        otherSupport: [
          {
            memberName: { type: String, default: "" },
            memberId: { type: String, default: "" },
            scheme: { type: String, default: "" },
            amountreceived: { type: Number },
            financialYear: { type: Date },
          },
        ],
      },
})

module.exports = mongoose.model("organizationSupportFamily", organizationSupportFamily)