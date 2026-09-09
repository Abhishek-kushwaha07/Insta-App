import bycrpt from 'bcryptjs'
import { userDBmodel } from '../model/usersDB.model.js'
import "dotenv/config";
import jwt from "jsonwebtoken";

//User Registraion API
export const register = async (req, res) => {
    const { name, age, phone_no, email, password } = req.body


    //validation
    const isExist = await userDBmodel.findOne({ email })
    const isPhone_Exist  = await userDBmodel.findOne({phone_no})
    if (isExist) {
        return res.status(400).json({ message: 'email already exist try using different email' })
    }
    if (isPhone_Exist) {
        return res.status(400).json({ message: 'email already exist try using different email' })
    }


    //hashing password
    const hashedpass = await bycrpt.hash(password, 10)


    // save user to DB
    try {
        await userDBmodel.create({
            name,
            age,
            phone_no,
            email,
            password: hashedpass
        })
        res.status(201).json({
            message: "register Success",
        })


    } catch (error) {
        res.status(500).json({
            message: "all field must correct or filled",

        })
    }


}


//User Login API
export const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: "email and password are required" });
    }
    const currentUser = await userDBmodel.findOne({ email })
    if (!currentUser) {
        return res.status(400).json({ message: "email or password is Invaild " });
    }
    const isMatched = await bycrpt.compare(password, currentUser.password)

    if (!isMatched) {
        return res.status(401).json({
            message: "email or password is Invaild"
        })

    }


    if (isMatched) {
        const token = jwt.sign(
            { userid: currentUser._id },
            process.env.ACCESS_TOKEN_SECRET,


        )

        res.status(200).json({
            message: "User login Successfull",
            token
        })

    }


}