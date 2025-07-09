import axios from 'axios'
import fs from 'fs'
import FormData from 'form-data'
import User from '../models/user.model.js'


const removeBg= async(req,res)=>{
    
    
    try {
        const clerkId = req.body.clerkId
        const user = await User.findOne({clerkId})
        if(!user){
            console.log("user not found");
            return;
        }

        
        
        const imagePath = req.file.path

        
        
        const imageFile = fs.createReadStream(imagePath)
        const formData= new FormData()
        formData.append('image_file',imageFile)
        
        const {data} = await axios.post('https://clipdrop-api.co/remove-background/v1',formData,{
            headers:{
                'x-api-key' : process.env.API_KEY
            },
            responseType: "arraybuffer"
        })

        const base64 = Buffer.from(data,'binary').toString('base64')
        const resultImage = `data:${req.file.mimetype};base64,${base64}`
        const currentBalance= user.creditBalance
        const updatedUser = await User.findByIdAndUpdate(user._id,{creditBalance:currentBalance-1})
        console.log(updatedUser);
        

        res.json({resultImage,updatedUser})
        
        
                
    } catch (error) {
        console.log(error);
        
    }
}


export {removeBg}