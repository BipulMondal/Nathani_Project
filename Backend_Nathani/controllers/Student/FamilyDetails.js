const mongoose = require("mongoose");
const familyDetailsModal = require("../../models/FamilyDetails")

const addFamilyDetails = async(req, res) => {
    try {
        const aadharNo = req.body;
        if(!aadharNo){
            return res.status(401).json({
                status: false,
                message: "Aadhar No is required"
            })
        }
        const familyDetails = familyDetailsModal.create(req.body);
        if(familyDetails){
            return res.status(200).json({
                status: true,
                message: "family details added successfully",
                familyDetails
            })
        }
        else{
            return res.status(500).json({
                status: false,
                message: "family details added failed"
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "something went wrong"
        })
    }
}

module.exports = {addFamilyDetails}