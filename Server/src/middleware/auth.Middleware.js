import jwt from 'jsonwebtoken'
import "dotenv/config";


 export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    //validation
    if (!token) {
        return res.status(401).json({
            message: "must provide token "
        })
    }

    //token verify
    try {
        const verified_user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        console.log(verified_user);
        
        req.user = verified_user
         next();


    } catch (error) {
        return res.status(401).json({ message: "invaild token or expired token " })

    }


}

