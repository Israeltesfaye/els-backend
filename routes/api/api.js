const express=require("express")
const router=express.Router();
const fetch=require("node-fetch")
const quotes=require("./database.js")
const video=require("../../models/video.js")

router.get("/quote",async (req,res)=>{
res.json(quotes[Math.floor(Math.random(6)*7)])
})
//videos
router.post("/videos",async(req,res)=>{
video.create({
url:req.params.url,
grade:req.params.grade,
subject:req.params.subject
})
res.json({msg:"videos posted"})
})
//get videos
router.get("/videos/:grade/:subject",async (req,res)=>{
 const {grade,subject}=req.params;
 find= await video.find({grade})
 res.json(find)
})



module.exports=router;
