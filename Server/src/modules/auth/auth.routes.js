import { login,  register, renewToken } from "./auth.controller.js"
import express from "express"


const router = express.Router() 

router.post("/register",register)
router.post("/login",login)
router.post("/refreshtoken",renewToken)

export default router
