const express = require('express');
const router = express.Router();
const multer = require('multer');
var storage = multer.memoryStorage()
var upload = multer({ storage: storage });
const userController = require("../../controllers/Auth/UserAuthentication")
const StudentController = require("../../controllers/Student/StudentInfo")

router.post("/registration", userController.register)
router.post("/login", userController.login)
router.post("/add_Student_data", StudentController.addStudent)


module.exports = router