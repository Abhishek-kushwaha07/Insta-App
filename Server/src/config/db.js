import mongoose from "mongoose"


export const ConnectDB = async (req, res) => {

    try {
        await mongoose.connect(process.env.MongoDB_URI)
       
       console.log("mongoDB is Connected");

    } catch (error) {
        console.log(error)
    }
    
} 
