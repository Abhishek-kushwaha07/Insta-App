import jwt from "jsonwebtoken";
import "dotenv/config"



export const generateTokens = (id) => {
    const accessToken = jwt.sign(
        { userid: id},
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
    )

    const  refreshToken = jwt.sign(
        { userid: id},
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" }
    )

    return {
        accessToken,refreshToken
    }
}




export const verifyAccesstoken = (token) => {
    return  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET) 
}
export const verifyRefreshtoken = (token) => {
    return jwt.verify(token,process.env.REFRESH_TOKEN_SECRET)

}