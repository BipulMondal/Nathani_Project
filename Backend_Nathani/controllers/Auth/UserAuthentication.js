const mongoose = require("mongoose");
const User = require("../../models/UserRegistration");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Validator } = require("node-input-validator");

// create JWT token
// function createToken(data) {
//   return jwt.sign(data, "user@1234567890");
// }

// User registration function
const register = async (req, res) => {
  const v = new Validator(req.body, {
    email: "required|email",
    mobile: "required|integer",
    password: "required|minLength:8",
  });

  const matched = await v.check();
  if (!matched) {
    return res.status(400).send({
      status: false,
      errors: v.errors,
      message: "Validation errors",
    });
  }

  // Check if user with given email or mobile already exists
  const existingUser = await User.findOne({
    $or: [{ email: req.body.email }, { mobile: req.body.mobile }],
  });

  if (existingUser) {
    if (existingUser.email === req.body.email) {
      return res.status(409).json({
        status: false,
        message: "Email already exists",
      });
    }
    if (existingUser.mobile === req.body.mobile) {
      return res.status(409).json({
        status: false,
        message: "Phone number already exists",
      });
    }
  } else {
    // Hash the password
    const hashedPassword = bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(10)
    );
    const userData = {
      ...req.body,
      password: hashedPassword,
      // token: createToken({ email: req.body.email })
    };

    // Save the user
    const newUser = new User(userData);
    await newUser
      .save()
      .then((data) => {
        res.status(201).json({
          status: true,
          message: "User registered successfully",
          data: {
            _id: data._id,
            // token: data.token
          },
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        res.status(500).json({
          status: false,
          message: "Server error, please try again",
        });
      });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json({
        status: false,
        message: "Invalid credentials",
      });
    }

    // If credentials are correct, generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({
      status: true,
      message: "Login Successfully",
      token,
      data: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        aadharNo: user.aadharNo
      },
      userType: user.userType,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error, please try again" });
  }
};

module.exports = { register, login };
