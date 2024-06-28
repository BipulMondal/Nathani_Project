const mongoose = require("mongoose");

const parentDeclaration = new mongoose.Schema({
  aadharNo: {type: String, default :"", required: true},
    parentDeclaration: {
        courseName: { type: String, default: "" },
        applicantName: { type: String, default: "" },
        parentName: { type: String, default: "" },
        place: { type: String, default: "" },
        date: { type: Date },
        studentPhoto: { type: String, default: "" },
        studentSign: { type: String, default: "" },
        parentSign: { type: String, default: "" },
      },
})

module.exports = mongoose.model("parentDeclaration", parentDeclaration)