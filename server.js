const express=require("express");
const app=express();
const URL=require("url");
const cors=require("cors");
const fetch=require("node-fetch");
const port=process.env.PORT||3000;
const dotenv=require("dotenv").config();
var bodyParser = require('body-parser')
const mongoose=require("mongoose");
//db
mongoose 
 .connect(process.env.MONGO)
 .catch(err => console.log(err))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//api route
app.use(express.static('public'))
app.set("view engine","ejs");
app.use("/api",require("./routes/apiRoute"));
app.use("/grade",require("./routes/grade"));
app.get("/insert",(req,res)=>{
  res.render("index")
})

app.get("/",(req,res)=>{
  res.render("home")
})
app.get("/about",(req,res)=>{
  res.render("about")
})
app.get("/contact",(req,res)=>{
  res.render("contact")
})
app.get("/thanks",(req,res)=>{
  res.render("aftersubmit.ejs")
})
app.get("/announcement",async(req,res)=>{
res.render("announcement");
});



app.listen(port,()=>{console.log(`app listening on port ${port}`)})
