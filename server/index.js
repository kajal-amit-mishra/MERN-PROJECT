const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const EmployeeModel = require("./models/Employee") 
const PORT = 6000
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")


const app = express()
app.use(express.json())
app.use(cors({
  origin:["http://localhost:5175"],
  methods:["Get","Post"],
  credentials:true
}))
app.use(cookieParser())

mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.post("/login",(req,res)=>{
    const {Email,Password} = req.body;
    const token = jwt.sign({Email:user.Email},"jwt-secret-key",{expiresIn:"1d"})
    res.cookie("token",token)
    EmployeeModel.findOne({Email:Email})
    .then(user=>{
      if(user){
        bcrypt.compare(Password,user.Password,(err,response)=>{
          if(response){
            res.json("success");
          }else{
            res.json("incorrect password")
          }
        })
      }else{
        res.json("no such records existed")
      }
    })
})


 app.post("/register",(req,res)=>{
     const {Firstname,Lastname, Email,Password} = req.body;
     bcrypt.hash(Password,10)
     .then((hash=>{
      EmployeeModel.create({Firstname,Lastname,Email,Password:hash})
     .then(USER=>res.json(USER))
     .catch(err=>res.json(err))
     })).catch(err=>console.log(err.message))
     
 })

app.listen(PORT,()=>{
   console.log(`server is running on port:${PORT}`)
})