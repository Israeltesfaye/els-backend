const express=require("express")
const router=express.Router();
const fetch=require("node-fetch")
const quotes=require("./database.js")
const video=require("../../models/video.js")

router.get("/quote",async (req,res)=>{
/*response=await fetch("https://type.fit/api/quotes")
data=await response.json();
res.json(data[Math.floor(Math.random(1643)*1644)])*/
res.json(quotes[Math.floor(Math.random(6)*7)])
})
//videos
router.post("/videos",async(req,res)=>{
postvid=new video({
url:req.params.url,
//grade:req.params.grade,
subject:req.params.subject
})
savedvid=await postvid.save();
console.log(savedvid)
})




module.exports=router;
