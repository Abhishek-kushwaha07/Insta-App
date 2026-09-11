import express from 'express'
import upload from '../../config/multer.js'
import { getpost ,createpost, } from './post.controller.js'
import { authMiddleware } from '../../middlewares/auth.Middleware.js'


const router = express.Router() 

router.get("/",(req,res)=>{
    res.status(200).json({
        message: "backend is running" 
    })
} ) 
router.get("/getpost",authMiddleware ,getpost  )
router.post("/create",authMiddleware,upload.single("image"), createpost )

export default router
