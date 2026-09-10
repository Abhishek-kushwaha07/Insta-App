import express from 'express'
import userRouter  from '../routes/UserRouter.js'
import "dotenv/config";
import authRouter from '../routes/authRouter.js';



export  const app = express()
app.use(express.json())

app.use('/user',userRouter )
app.use('/auth',authRouter)



