const router=require("express").Router();

router.get("/:grade/book/:subject",(req,res)=>{
res.send("butit");
});

router.get("/:grade/video/:subject",(req,res)=>{
url="/SEO_for_Developers_in_100_Seconds(480p).mp4";
title="workout"
res.render("video",[url,title]);
});


module.exports=router;
