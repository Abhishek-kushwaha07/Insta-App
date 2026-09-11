import express from 'express'
import postRouter from './modules/posts/post.routes.js'
import "dotenv/config";
import authRouter from './modules/auth/auth.routes.js';
import cookieParser from "cookie-parser";


export  const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/user',postRouter );
app.use('/auth',authRouter);
