import mongoose from "mongoose";

const postSchema = new mongoose.Schema({

userid:{
    type:String,
    required:true
},

title:{
    type:String,
    required:true
},
image:{
  type:String
}
,
caption:{
    type :String,
    required:true
}

})

export const postModel = mongoose.model("posts" ,postSchema)

