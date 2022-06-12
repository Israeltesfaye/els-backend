const express=require("express")
const app=express()
const mongoose=require("mongoose")
const path = require('path')
require('dotenv').config()
const port=process.env.PORT||8000;
const api=require("./routes/api/api.js")
const cors=require("cors");
mongoose.connect(process.env.MONGO,()=>console.log("connected"))
cors();
//routes
app.use("/api",api)
app.use(express.json())






app.listen(port)
