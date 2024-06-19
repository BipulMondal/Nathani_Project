const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    registeredBy:{
        type: String,
        required: true
    },
    userType:{
        type:String,
    },
    aadharNo:{
        type: String,
        required: true
    },
    AadharLinkedMobileNo:{
        type: Number,
        required: true
    },
    otp:{
        type: Number,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    middleName:{
        type: String,
    },
    lastName:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true  
    },
    mobile:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    loginId:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },    
    token:{
        type: String
    }
})

module.exports = mongoose.model("registration", userSchema)