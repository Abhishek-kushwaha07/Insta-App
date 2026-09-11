import { postModel } from './post.model.js'

import uploadFiles from '../../middlewares/Storage.service.js'

// post GET API
export const getpost = async (req,res) => {




    try {
        const allPost = await postModel.find( {userid:req.user.userid})
        res.status(200).json({
            message: "all posts are ",
            allPost

        })
    } catch (error) {

        res.send(error)

    }



}


//Post CREATE API
export const createpost = async (req, res) => {

    const { title, caption } = req.body

    if (!req.file.buffer || !req.file.originalname) {

        return res.status(500).json({
            message: "All fileds are require"
        })

    }
    try {


        const uploded = await uploadFiles(
            req.file.buffer,
            req.file.originalname
        )
  
        console.log(req.user.userid);
        
        

        const newPost = await postModel.create({
            userid:req.user.userid,
            title,
            caption,
            image: uploded.url,
        })
        res.status(201).json({
            message: "Post Created Sucessfully",
            newPost
        })

    } catch (error) {
        res.status(500).json({
            message: "internal Server error",
            error
        })


    }
}
