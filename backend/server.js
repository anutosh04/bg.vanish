import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors';
import connectDB from './config/mongo.js';
import userRouter from './routes/user.route.js';
import { fileURLToPath } from 'url';
import path from 'path';
import multer from 'multer';
import {v2 as cloudinary} from 'cloudinary'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload = multer({ dest: path.join(__dirname, 'uploads/') });

cloudinary.config({
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET
})





const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get('/', (req,res)=> res.send("server live"))
app.use('/api/user', userRouter)

app.post('/upload', upload.single('image'), async ()=>{
    try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      background_removal: 'cloudinary_ai',
    });

    res.json({ url: result.secure_url });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
})


app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`) );