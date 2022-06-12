const express=require("express");
const app=express();
const port=process.env.PORT||3000;
const dotenv=require("dotenv").config();
var bodyParser = require('body-parser')
const mongoose=require("mongoose");
//db
mongoose 
 .connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true})   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err))


app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//api route
app.use("/api",require("./routes/apiRoute"));
app.listen(port,()=>{console.log(`app listening on port ${port}`)})
