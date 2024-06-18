const express = require('express');
const router = express.Router();
const multer = require('multer');
var storage = multer.memoryStorage()
var upload = multer({ storage: storage });
const userController = require("../../controllers/Auth/UserRegistration")

router.post("/registration", userController.register)


module.exports = router