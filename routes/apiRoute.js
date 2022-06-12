const router=require("express").Router();
let announcements=require("../models/announcementModel");
//get quote
router.get("/quote",(req,res)=>{
 quote="we will replace this with actual quotes"
 res.json(quote)
})
//post announcements
router.post("/announcement",async(req,res)=>{
announcement= await new announcements({
   title:req.body.title,
   content:req.body.content
 });
ab=announcement.save()
console.log(ab)
 res.json(announcement)
})
//get announcements
router.get("/announcement",async(req,res)=>{
an= await  announcements.find();
res.json(an)
console.log(an)
})

module.exports=router;
