const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const studentModal = require("../../models/StudentInfo");

const addStudentDetails = async (req, res) => {
  try {
    console.log("wewew", req.body);
    const check = await studentModal.findOne({
      _id: new mongoose.Types.ObjectId(req.body._id),
      saveAsDraft: true,
    });
    console.log("check", check);

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
        "studentInfo.aadharNo": req.body.studentInfo.aadharNo,
        isDeleted: false,
      });

      console.log("existsStudent", existsStudent);

      if (existsStudent) {
        return res.status(400).json({
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
    const { userType } = req.body;
    let existStudent = [];
    if (userType === "Trusty") {
      existStudent = await studentModal.findOne({
        _id: req.params.id,
      });
    }else {
      existStudent = await studentModal.findOne({
        addedBy: req.params.id,
      });
    }
    
    if (!existStudent) {
      return res.status(200).json({
        status: false,
        message: "No Student Found",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Student Data fetched successfully",
        existStudent,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "server error occurred",
      error: error.message,
    });
  }
};

const getStudentData = async (req, res) => {
  try {
    const existStudent = await studentModal.findOne({
      "studentInfo.aadharNo": req.body.aadharNo,
    });
    if (!existStudent) {
      return res.status(200).json({
        status: false,
        message: "No Student Found",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Student Data fetched successfully",
        existStudent,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "server error occurred",
      error: error.message,
    });
  }
};

const getStudentsDetailsAddedBy = async (req, res) => {
  try {
    let allData = await studentModal.find({
      addedBy: req.body.addedBy,
      isDeleted: false,
    });
    if (!allData) {
      return res.status(401).json({
        status: false,
        message: "no students details found",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Students Data gets Successfully",
        allData,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "server error occurred",
      error: error.message,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const updatedStudents = await studentModal.findByIdAndDelete({
      _id: req.params.id,
    });

    if (updatedStudents) {
      return res.status(200).json({
        status: true,
        message: "Student deleted successfully",
      });
    } else {
      return res.status(400).json({
        status: false,
        message: "Student deleted failed ",
      });
    }
  } catch (error) {
    return res.status(501).json({
      status: false,
      message: "Internal server error ",
    });
  }
};

const addFamilyDetails = async (req, res) => {
  try {
    const { aadharNo, familyDetail } = req.body;
    console.log("wewewewe", req.body, aadharNo);

    // Find the student document by aadharNo
    const student = await studentModal.findOne({
      "studentInfo.aadharNo": aadharNo,
    });

    if (!student) {
      return res.status(404).json({
        status: false,
        message: "Student not found",
      });
    }

    // Check if the family member already exists
    const existsMember = student.familyDetails.find(
      (detail) =>
        detail.relationPersonAadhar === familyDetail.relationPersonAadhar
    );

    if (existsMember) {
      return res.status(401).json({
        status: false,
        message: "Member aadhar already exists",
      });
    }

    // Add the new family detail
    student.familyDetails.push(familyDetail);

    // Save the student document
    await student.save();

    res.status(200).json({
      status: true,
      message: "Family detail added successfully",
      familyDetails: student.familyDetails,
    });
  } catch (error) {
    console.error("Error adding family detail:", error);
    res.status(500).json({
      status: false,
      message: "An error occurred while adding family detail",
      error,
    });
  }
};

const addFamilyMember = async (req, res) => {
  const { id } = req.params;
  const { familyDetails } = req.body;
  console.log("aadharNo", id, familyDetails);

  try {
    // Find the student by ID and update the familyDetails array
    const student = await studentModal.findOne({
      "studentInfo.aadharNo": id,
    });

    if (!student) {
      return res.status(404).json({
        status: false,
        message: "Student not found",
      });
    }

    // Update the familyDetails array
    student.familyDetails = familyDetails;

    // Save the updated student document
    await student.save();

    res
      .status(200)
      .json({ message: "Family Member Added successfully", student });
  } catch (error) {
    res.status(500).json({ message: "Error adding family member", error });
  }
};

const updateFamilyMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { aadharNo, familyDetails } = req.body;

    const student = await studentModal.findOne({
      "studentInfo.aadharNo": aadharNo,
    });

    if (!student) {
      return res.status(400).json({
        status: false,
        message: "Student not found",
      });
    }

    const family = student.familyDetails.findById({ _id: id });
    if (!family) {
      return res.status(400).json({
        status: false,
        message: "Member Not Found",
      });
    }

    // Update the familyDetails array
    family = familyDetails;

    // Save the updated student family document
    await family.save();
    res
      .status(200)
      .json({ message: "Family Member Updated successfully", family });
  } catch (error) {
    res.status(500).json({ message: "Error updating family member", error });
  }
};

const deleteFamilyMember = async (req, res) => {
  console.log("Family_Member_ID:", req.params.id);
  
  try {
    const studentId = req.body.studentId; // Assuming you are passing studentId in the request body
    const familyMemberId = req.params.id;

    const student = await studentModal.findOneAndUpdate(
      { "familyDetails._id": familyMemberId },
      { $pull: { familyDetails: { _id: familyMemberId } } },
      { new: true }
    );

    if (!student) {
      return res.status(400).json({
        status: false,
        message: 'Member delete failed'
      });
    }

    return res.status(200).json({
      status: true,
      message: 'Member deleted successfully'
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      status: false,
      message: 'Something went wrong, please try again later'
    });
  }
};




module.exports = {
  addStudentDetails,
  getSingleStudentData,
  getStudentsDetailsAddedBy,
  addFamilyDetails,
  addFamilyMember,
  updateFamilyMember,
  deleteStudent,
  getStudentData,
  deleteFamilyMember
};
