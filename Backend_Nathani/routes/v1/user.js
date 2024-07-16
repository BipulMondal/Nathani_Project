const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const userController = require('../../controllers/Auth/UserAuthentication');
const studentController = require('../../controllers/Student/StudentInfo');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads/user'));
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

// Configure multer middleware
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 9000 * 1024 * 1024, // Set file size limit (e.g., 9GB)
  },
});

// Route to handle image upload
router.post('/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: false,
        message: 'No file uploaded' 
      });
    }

    const fileUrl = `/uploads/user/${req.file.filename}`;
    res.status(200).json({
      status: true,
      message: 'File uploaded successfully',
      file: fileUrl, // Return the URL instead of the path
    });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading file', error });
  }
});


// User and student routes
router.post('/registration', userController.register);
router.post('/login', userController.login);
router.post('/add_Student_data', studentController.addStudentDetails);
router.post('/get_Student_Data', studentController.getStudentData);
router.post('/get_Single_Student/:id', studentController.getSingleStudentData);
router.delete('/delete_Student/:id', studentController.deleteStudent);

router.post('/get_student_addedBy', studentController.getStudentsDetailsAddedBy)

router.post("/add_family/:id", studentController.addFamilyMember)
router.put("/update_family/:id", studentController.updateFamilyMember)


module.exports = router;
