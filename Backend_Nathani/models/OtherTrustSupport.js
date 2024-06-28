const mongoose = require("mongoose");

const otherTrustSupport = new mongoose.Schema({
  aadharNo: {type: String, default :"", required: true},
    othertrustSupport: {
        otherTrustSupport: { type: String, default: "" },
        trustDetails: [
          {
            trustName: { type: String, default: "" },
            currentYearAmount: { type: Number, default: 0 },
            lastYearAmount: { type: Number, default: 0 },
            trustState: { type: String, default: "" },
            trustCity: { type: String, default: "" },
          },
        ],
        otherContribution: [
          {
            contributionSource: { type: String, default: "" },
            contributionCurrentyearAmunt: { type: Number, default: 0 },
            contributionLastyearAmunt: { type: Number, default: 0 },
            contributionState: { type: String, default: "" },
            contributionCity: { type: String, default: "" },
          },
        ],
        govtScholarshipApply: { type: String, default: "" },
        scholarAmount: { type: Number, default: 0 },
        scholarYear: { type: Date, default: Date.now },
        scholarName: { type: String, default: "" },
        applicationId: { type: String, default: "" },
        applicationPass: { type: String, default: "" },
      },
})

module.exports = mongoose.model("otherTrustSupport", otherTrustSupport)