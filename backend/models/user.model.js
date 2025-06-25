import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type:String,
        
    },
    fullName:{
        type: String,
        required: true
    },
    creditBalance:{
        type:Number,
        default:5
    }

})

export default mongoose.model("User",userSchema)