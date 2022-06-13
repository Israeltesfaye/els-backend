const router=require("express").Router();
const Video=require("../models/videoModel");
const announcements=require("../models/announcementModel");
const quote=require("./quote");
//get quote
router.get("/quote",(req,res)=>{
res.json(quote[Math.floor(Math.random(6)*7)])
})
//post announcements
router.post("/announcement",async(req,res)=>{
announcement= await new announcements({
   title:req.body.title,
   content:req.body.content
 });
ab=announcement.save();
})
//get announcements
router.get("/announcement",async(req,res)=>{
an= await  announcements.find();
res.json(an)
})
//post video
router.post("/video",async(req,res)=>{
  video=new Video({
    title:req.body.title,
    url:req.body.url,
    grade:req.body.grade,
    subject:req.body.subject
  });
sav=await video.save();
res.json("video posted succesfully")
})
//get video
router.get("/video",async(req,res)=>{
findvideo=await Video.find();
res.json(findvideo);
})
module.exports=router;
