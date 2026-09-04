import express from 'express'
import  router  from '../routes/UserRouter.js'
import "dotenv/config";



export  const app = express()
app.use(express.json())

app.use('/user',router )



