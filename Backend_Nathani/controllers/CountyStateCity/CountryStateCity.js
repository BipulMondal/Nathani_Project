const mongoose = require("mongoose");
const CountryStateCityModel = require("../../models/CoountryStateCity");

const getCountryStateCity = async (req, res) => {
    try {
        const data = await CountryStateCityModel.find();
        console.log("dfdfdf",)
        if (data.length > 0) {
            return res.status(200).json({
                status: true,
                message: "Country, state, and city data retrieved successfully",
                data
            });
        } else {
            return res.status(404).json({
                status: false,
                message: "No data found"
            });
        }
    } catch (error) {
        console.error(error); // Log error for debugging
        return res.status(500).json({
            status: false,
            message: "Server error"
        });
    }
};

const postData = async (req, res) => {
    try {
        const data = req.body;
        const newData = await CountryStateCityModel.create(data);

        if(newData){
            return res.status(200).json({
                status: true,
                message: "added successfully",
                newData
            })
        }

    } catch (error) {
        return res.status(401).json({
            status: false,
            message: "server error",
        })
    }
}

module.exports = { getCountryStateCity, postData };
