const mongoose = require("mongoose");
const studentModal = require("../../models/StudentInfo");

const addStudent = async (req, res) => {
    try {
        const { studentInfo, familyDetails, jamatInfo } = req.body;
    
        if (!studentInfo || !studentInfo.aadharNo) {
          return res.status(400).json({
            success: false,
            message: "Aadhar number is required"
          });
        }
    
        // Construct the update data object
        const updateData = {
          studentInfo,
          familyDetails,
          jamatInfo,
        };
        console.log("popopopo", updateData)
    
        const student = await studentModal.findOneAndUpdate(
          { "studentInfo.aadharNo": studentInfo.aadharNo }, // Search criteria
          { $set: updateData }, // Data to update
          { new: true, upsert: true, setDefaultsOnInsert: true } // Options: create if not exists, return new doc
        );
        
    
        res.status(200).json({
          success: true,
          message: "Student data added/updated successfully",
          data: student
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "An error occurred while processing the request",
          error: error.message
        });
      }
};


module.exports = {addStudent}