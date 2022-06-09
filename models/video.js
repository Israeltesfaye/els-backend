const mongoose=require("mongoose")
const videoSchema=new mongoose.Schema({
	url:String,
	grade:
	String,
	subject:
	String
})

module.exports=mongoose.model("video",videoSchema)
