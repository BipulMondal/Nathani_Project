var express = require('express');
var router = express.Router();
var path = require('path');
const multer = require('multer');
const User = require('./user')
const userAuthController = require("../../controllers/Auth/UserAuthentication")

var multistorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/user");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});
var uploadmulti = multer({ storage: multistorage });
var storage = multer.memoryStorage()
var upload = multer({ storage: storage });

const limitsMulter = {
  files: 1, // allow only 1 file per request
  fileSize: 9000 * 1024 * 1024, // (replace MBs allowed with your desires)
};
const uploadNew = multer({
  // storage: storage,
  dest: path.resolve('./malter'),
  limits: limitsMulter,
});

router.post("/registration", userAuthController.register)

router.use('/user', User)

module.exports = router;

