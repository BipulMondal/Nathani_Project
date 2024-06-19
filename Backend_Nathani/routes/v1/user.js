const express = require('express');
const router = express.Router();
const multer = require('multer');
var storage = multer.memoryStorage()
var upload = multer({ storage: storage });
const userController = require("../../controllers/Auth/UserAuthentication")

router.post("/registration", userController.register)
router.post("/login", userController.login)


module.exports = router