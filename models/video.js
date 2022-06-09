const mongoose=require("mongoose")
const videoSchema=new mongoose.Schema({
	url:{
	  type:String
	},
	grade:{
	  type:String
	},
	subject:{
	type:String
	}
},{timestamps:true})

module.exports=mongoose.model("video",videoSchema)
