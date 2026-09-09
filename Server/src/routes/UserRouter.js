import express from 'express'
import upload from '../config/multer.js'
import { getpost ,createpost, } from '../controllers/postController.js'
import { login, register } from '../controllers/auth.Controller.js'
import { authMiddleware } from '../middleware/auth.Middleware.js'

 const router = express.Router() 

router.get("/",(req,res)=>{
    res.status(200).json({
        message: "backend is running" 
    })
} ) 
router.get("/getpost",authMiddleware ,getpost  )
router.post("/create",authMiddleware,upload.single("image"), createpost )
router.post("/register",register)
router.post("/login",login)
export default router


