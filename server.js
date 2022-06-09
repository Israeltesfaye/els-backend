const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const port=process.env.PORT||8000;
const api=require("./routes/api/api.js")
const cors=require("cors");
dotenv.config()
mongoose.connect(process.env.MONGO)
cors();
//routes
app.use("/api",api)






app.listen(port)
