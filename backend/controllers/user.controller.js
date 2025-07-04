import User from "../models/user.model.js";

const register= async (req,res)=>{
    const {fullName, email,clerkId}= req.body;
    
    try {
        let user = await User.findOne({clerkId});
        if(user){
            
            
            return  await res.status(200).json({
                user
            })}
        else{
            user= await User.create({
                fullName,
                email,
                clerkId
            
            })
        }
        if(user){
            
            
            await res.status(201).json({user})}
        
    } catch (error) {
        console.log("Error in registering user:", error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

const getCredits= async (req,res)=>{
    const {clerkId} =req.body;
    try {
        let user= await User.findOne({clerkId});
        res.status(200).json({credits: user?.creditBalance})
        
    } catch (error) {
        console.log("Error in getting credits:", error);
        res.status(500).json({error: "Internal Server Error"});
        
    }
}

export {register, getCredits};