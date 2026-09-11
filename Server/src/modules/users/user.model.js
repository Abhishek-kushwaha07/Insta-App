import mongoose, { Mongoose } from "mongoose";

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2

    },
    age: {
        type: Number,
        required: true
    },
    phone_no: {
        type: Number,
        unique:true,
        required: [true,"phone number is required"],
        minlength: 10


    },
    email: {
        type: String,
        required: true,
        unique:true,
        match:/^(?!\.)(?!.*\. \.)([a-z0-9_'+ \-\.]*)[a-z0-9_+\-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/
    },
    password: {
        type: String,
        required: true,
    },

    refreshToken:{
        type:String
    }


},{timestamps:true})




export const userDBmodel = mongoose.model("userDB", usersSchema)
