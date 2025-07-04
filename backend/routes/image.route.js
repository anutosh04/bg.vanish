import express from 'express'
import { removeBg } from '../controllers/image.controller.js'
import upload from '../middleware/multer.js'


const imageRouter = express.Router()
imageRouter.post('/remove',upload.single('image'),removeBg)

export default imageRouter