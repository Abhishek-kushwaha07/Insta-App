import express from 'express'
import  router  from './routes/UserRouter.js'
import "dotenv/config";
import { ConnectDB } from './config/ConnectDB.js';


export  const app = express()
app.use(express.json())
ConnectDB()
app.use('/user',router )



