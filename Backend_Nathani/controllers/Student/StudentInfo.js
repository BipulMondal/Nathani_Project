const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const studentModal = require("../../models/StudentInfo");
const studentDetailsModal = require("../../models/StudentDetails")

const addStudentDetails = async (req, res) => {
  try {
    let AadharNo =  req.body.studentInfo.aadharNo;
    const check = await studentModal.findOne({
      _id: new mongoose.Types.ObjectId(req.body._id),
      saveAsDraft: true,
    });

    if (check) {
      await studentModal.findOneAndUpdate(
        { _id: check._id },
        { ...req.body, updatedStatus: true },
        { new: true } // Ensure the updated document is returned
      );

      return res.status(200).json({
        status: true,
        message: "Student updated successfully",
      });
    } else {
      // Generate a new student code
    
      let studentCode = "";
      const code = await studentModal
        .findOne({}, { studentCode: 1 })
        .sort({ createdOn: -1 })
        .exec();

      const inputString = "S000001";
      if (!code || !code.studentCode) {
        studentCode = inputString;
      } else {
        const substring = Number(code.studentCode.slice(1)) + 1;
        studentCode = "S" + String(substring).padStart(6, "0");
      }

      // Check if the Aadhar number already exists
      const existsStudent = await studentModal.findOne({
        "studentInfo.aadharNo": AadharNo,
        isDeleted: false,
      });

      console.log("fuck", AadharNo, existsStudent)

      if (existsStudent) {
        return res.status(401).json({
          status: false,
          message: "Aadhar No already exists",
        });
      } else {
        // Create new student details
        const studentDetailsData = {
          ...req.body,
          studentCode: studentCode,
          saveAsDraft: req.body.saveAsDraft || false,
        };

        const studentDetails = new studentModal(studentDetailsData);
        await studentDetails.save();

        return res.status(200).json({
          status: true,
          message: "Student details added successfully",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "An error occurred",
      error: error.message,
    });
  }
};

const getSingleStudentData = async (req, res) => {
  try {
    const { aadharNo } = req.body;

    // Query the nested field using dot notation
    const existStudent = await studentModal.findOne({ "studentInfo.aadharNo": aadharNo });
    // console.log("asdasd", existStudent, aadharNo, req.body);
  

    if (!existStudent) {
      return res.status(200).json({
        status: false,
        message: "No Student Found"
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Student Data fetched successfully",
        existStudent
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "server error occurred",
      error: error.message
    });
  }
};

const getStudentsDetailsAddedBy = async (req, res) => {
try {
  const {aadharNo, addedBy} = req.body;
  let allData = await studentModal.find({ addedBy : addedBy, isDeleted: false});
  console.log("cccc", addedBy)
  if(!allData){
    return res.status(401).json({
      status: false,
      message: "no students details found"
    })
  }
  else{
    return res.status(200).json({
      status: true,
      message: "Students Data gets Successfully",
      allData
    })
  }
} catch (error) {
  return res.status(500).json({
    status: false,
    message: "server error occurred",
    error: error.message
  });
}

}

const addNewStudentDetails = async (req, res) => {
  try {
    let AadharNo =  req.body.aadharNo;
    const check = await studentDetailsModal.findOne({
      _id: new mongoose.Types.ObjectId(req.body._id),
      saveAsDraft: true,
    });

    if (check) {
      await studentDetailsModal.findOneAndUpdate(
        { _id: check._id },
        { ...req.body, updatedStatus: true },
        { new: true } // Ensure the updated document is returned
      );

      return res.status(200).json({
        status: true,
        message: "Student details updated successfully",
      });
    } else {
      // Generate a new student code
    
      let studentCode = "";
      const code = await studentDetailsModal
        .findOne({}, { studentCode: 1 })
        .sort({ createdOn: -1 })
        .exec();

      const inputString = "S000001";
      if (!code || !code.studentCode) {
        studentCode = inputString;
      } else {
        const substring = Number(code.studentCode.slice(1)) + 1;
        studentCode = "S" + String(substring).padStart(6, "0");
      }

      // Check if the Aadhar number already exists
      const existsStudent = await studentDetailsModal.findOne({
        aadharNo: AadharNo,
        isDeleted: false,
      });

      if (existsStudent) {
        return res.status(401).json({
          status: false,
          message: "Aadhar No already exists",
        });
      } else {
        // Create new student details
        const studentDetailsData = {
          ...req.body,
          studentCode: studentCode,
          saveAsDraft: req.body.saveAsDraft || false,
        };

        const studentDetails = new studentDetailsModal(studentDetailsData);
        await studentDetails.save();

        return res.status(200).json({
          status: true,
          message: "Student details added successfully",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "An error occurred",
      error: error.message,
    });
  }
};



module.exports = {addNewStudentDetails, addStudentDetails, getSingleStudentData, getStudentsDetailsAddedBy };
