import bycrpt from 'bcryptjs'
import { userDBmodel } from '../model/usersDB.model.js'

export const register = async (req, res) => {
    const { name, age, phone_no, email, password } = req.body

    const hashedpass = await bycrpt.hash(password, 10)

    try {
        const currentUser = await userDBmodel.create({
            name,
            age,
            phone_no,
            email,
            password: hashedpass
        })
        res.status(201).json({
            message: "register Success"
        })


    } catch (error) {
        res.status(500).json({
            message: "all field must correct or filled"
        })
    }


}




export const login = async (req, res) => {

}