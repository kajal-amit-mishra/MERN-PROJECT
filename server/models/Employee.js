const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    Firstname:String,
    Lastname:String,
    Email:String,
    Password:String
});

const EmployeeModel = mongoose.model("employees",EmployeeSchema)
module.exports = EmployeeModel