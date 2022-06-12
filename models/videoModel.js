const mongoose=require("mongoose");
const videoSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  url:{
    type:String,
    required:true
  },
  grade:{
    type:String,
    required:true
  },
  subject:{
    type:String,
    required:true
  }
});

module.exports=mongoose.model("Video",videoSchema)