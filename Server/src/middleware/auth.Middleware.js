import { verifyAccesstoken } from "../utils/jwt.js";
import "dotenv/config";


export const authMiddleware = (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1];

    //validation
    if (!token) {
        return res.status(401).json({
            message: "must provide token "
        })
    }

    //token verify
    try {
        req.user = verifyAccesstoken(token)
            next();

    } catch (error) {
        return res.status(401).json({ message: "invaild token or expired token " })

    }


}

