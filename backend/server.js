import dotenv from 'dotenv';
import express from 'express'
import cors from 'cors';
import connectDB from './config/mongo.js';
import userRouter from './routes/user.route.js';
import { fileURLToPath } from 'url';
import path from 'path';
import multer from 'multer';
import imageRouter from './routes/image.route.js'



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload = multer({ dest: path.join(__dirname, 'uploads/') });


dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
connectDB();

app.get('/', (req,res)=> res.send("server live"))
app.use('/api/user', userRouter)
app.use('/api/bg',imageRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
export default app;
