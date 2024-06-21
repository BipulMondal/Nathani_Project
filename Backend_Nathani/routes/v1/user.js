const express = require('express');
const router = express.Router();
const multer = require('multer');
var storage = multer.memoryStorage()
var upload = multer({ storage: storage });
const userController = require("../../controllers/Auth/UserAuthentication")
const StudentController = require("../../controllers/Student/StudentInfo")


// var multistorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "uploads/user");
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname + "-" + Date.now() + file.originalname);
//     },
//   });

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/'); // Specify the destination directory
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     },
//   });
  
//   const upload = multer({ storage: storage });

  
//   var uploadmulti = multer({ storage: multistorage });
  
//   const limitsMulter = {
//     files: 1, // allow only 1 file per request
//     fileSize: 9000 * 1024 * 1024, // (replace MBs allowed with your desires)
//   };
//   const uploadNew = multer({
//     // storage: storage,
//     dest: path.resolve('./malter'),
//     limits: limitsMulter,
//   });

router.post("/registration", userController.register)
router.post("/login", userController.login)
router.post("/add_Student_data", StudentController.addStudentDetails)
// router.post("/uploadImg",  upload.single('studentImage') )


module.exports = router