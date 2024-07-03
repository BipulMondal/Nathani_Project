const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const studentModal = require("../../models/StudentInfo");

const addStudentDetails = async (req, res) => {
  try {
    let AadharNo =  req.body.aadharNo;
    const check = await studentModal.findOne({
      _id: new mongoose.Types.ObjectId(req.body._id),
      saveAsDraft: true,
    });
    console.log("check", check)

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

      // console.log("fuck", AadharNo, existsStudent)

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

// const addNewStudentDetails = async (req, res) => {
//   try {
//     let AadharNo =  req.body.aadharNo;
//     const check = await studentDetailsModal.findOne({
//       _id: new mongoose.Types.ObjectId(req.body._id),
//       saveAsDraft: true,
//     });

//     if (check) {
//       await studentDetailsModal.findOneAndUpdate(
//         { _id: check._id },
//         { ...req.body, updatedStatus: true },
//         { new: true } // Ensure the updated document is returned
//       );

//       return res.status(200).json({
//         status: true,
//         message: "Student details updated successfully",
//       });
//     } else {
//       // Generate a new student code
    
//       let studentCode = "";
//       const code = await studentDetailsModal
//         .findOne({}, { studentCode: 1 })
//         .sort({ createdOn: -1 })
//         .exec();

//       const inputString = "S000001";
//       if (!code || !code.studentCode) {
//         studentCode = inputString;
//       } else {
//         const substring = Number(code.studentCode.slice(1)) + 1;
//         studentCode = "S" + String(substring).padStart(6, "0");
//       }

//       // Check if the Aadhar number already exists
//       const existsStudent = await studentDetailsModal.findOne({
//         aadharNo: AadharNo,
//         isDeleted: false,
//       });

//       if (existsStudent) {
//         return res.status(401).json({
//           status: false,
//           message: "Aadhar No already exists",
//         });
//       } else {
//         // Create new student details
//         const studentDetailsData = {
//           ...req.body,
//           studentCode: studentCode,
//           saveAsDraft: req.body.saveAsDraft || false,
//         };

//         const studentDetails = new studentDetailsModal(studentDetailsData);
//         await studentDetails.save();

//         return res.status(200).json({
//           status: true,
//           message: "Student details added successfully",
//         });
//       }
//     }
//   } catch (error) {
//     return res.status(500).json({
//       status: false,
//       message: "An error occurred",
//       error: error.message,
//     });
//   }
// };

const addFamilyDetails = async (req, res) => {
  try {
    const { aadharNo, familyDetail } = req.body;
    console.log("wewewewe", req.body, aadharNo)

    // Find the student document by aadharNo
    const student = await studentModal.findOne({ "studentInfo.aadharNo": aadharNo });

    if (!student) {
      return res.status(404).json({
        status: false,
        message: "Student not found"
      });
    }

    // Check if the family member already exists
    const existsMember = student.familyDetails.find(
      (detail) => detail.relationPersonAadhar === familyDetail.relationPersonAadhar
    );

    if (existsMember) {
      return res.status(401).json({
        status: false,
        message: "Member aadhar already exists"
      });
    }

    // Add the new family detail
    student.familyDetails.push(familyDetail);

    // Save the student document
    await student.save();

    res.status(200).json({
      status: true,
      message: "Family detail added successfully",
      familyDetails: student.familyDetails
    });
  } catch (error) {
    console.error("Error adding family detail:", error);
    res.status(500).json({
      status: false,
      message: "An error occurred while adding family detail",
      error
    });
  }
};

const addFamilyMember = async (req, res) => {
  const { aadharNo } = req.params;
  const { _id, ...familyMemberData } = req.body;

  console.log("aadhar", aadharNo, req.body)

  // Convert the family member data from the object format to an array of values
  const familyMember = Object.values(familyMemberData)[0];

  try {
    const student = await studentModal.findOne({ 'studentInfo.aadharNo': aadharNo });
    console.log("student", student)
    if (!student) {
      return res.status(404).send('Student not found');
    }

    if (_id) {
      // Convert _id to ObjectId
      const familyMemberId = mongoose.Types.ObjectId(_id);

      // Update existing family member
      const existingMemberIndex = student.familyDetails.findIndex(
        member => member._id.equals(familyMemberId)
      );

      if (existingMemberIndex !== -1) {
        student.familyDetails[existingMemberIndex] = {
          ...student.familyDetails[existingMemberIndex]._doc,
          ...familyMember,
        };
      } else {
        return res.status(404).send('Family member not found');
      }
    } else {
      // Add new family member
      student.familyDetails.push(familyMember);
    }

    await student.save();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};







module.exports = { addStudentDetails, getSingleStudentData, getStudentsDetailsAddedBy, addFamilyDetails, addFamilyMember };
