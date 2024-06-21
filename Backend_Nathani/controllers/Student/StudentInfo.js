const mongoose = require("mongoose");
const studentModal = require("../../models/StudentInfo");

const addStudent = async (req, res) => {
  try {
    const { studentInfo, familyDetails, jamatInfo } = req.body;

    if (!studentInfo || !studentInfo.aadharNo) {
      return res.status(400).json({
        success: false,
        message: "Aadhar number is required",
      });
    }

    // Construct the update data object
    const updateData = {
      studentInfo,
      familyDetails,
      jamatInfo,
    };
    console.log("popopopo", updateData);

    const student = await studentModal.findOneAndUpdate(
      { "studentInfo.aadharNo": studentInfo.aadharNo }, // Search criteria
      { $set: updateData }, // Data to update
      { new: true, upsert: true, setDefaultsOnInsert: true } // Options: create if not exists, return new doc
    );

    res.status(200).json({
      success: true,
      message: "Student data added/updated successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while processing the request",
      error: error.message,
    });
  }
};

const addStudentDetails = async (req, res) => {
  try {
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
        message: "Student updated request sent successfully",
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
        "studentInfo.aadharNo": req.body.aadharNo,
        isDeleted: false,
        saveAsDraft: false,
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


module.exports = { addStudent, addStudentDetails };
