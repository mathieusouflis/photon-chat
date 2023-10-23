import bcrypt from "bcrypt";
import usernameValidator from "../validators/usernameValidator.js"
import jwt from "jsonwebtoken"
import User from "../models/Users.js"
import dotenv from "dotenv"
dotenv.config()

export const authRegister = async (req, res) => {
    const data = req.body
    if(!data || !data.username || !data.password){
        res.status(422)
        res.end()
    }else {
        !usernameValidator(data.username) && function (){
            res.status(422)
            res.json({
                message: "Username allready taken."
            })
            res.end()
        }

        const user = new User({username: data.username, password: await bcrypt.hash(data.password, 256)}).save()

        res.status(200)
        res.json(user)
        res.end()
    }
}

export const authLogin = async (req, res) => {
    const data = req.body
    console.log(data)
    if(!data || !data.username || !data.password){
        res.status(422)
        res.end()
    }else{
        const user = await User.findOne({username: data.username})
        !bcrypt.compare(data.password, user.password) && function(){
            res.status(402)
            res.json({
                message: "Wrong Password"
            })
            res.end()
        }
        console.log(process.env.JWT_SECRET)
        const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET)
        res.json({
            user,
            token
        })
        res.status(200)
        res.end()
    }
}