import Users from "../Models/Users.js"
import bcrypt from "bcrypt"
import { createError } from "../utils/error.js"
import jwt from "jsonwebtoken"

export let register = async (req, res, next) => {
    try {
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(req.body.password, salt)
        let newUser = new Users({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })

        let existingUser = await Users.findOne({ username: req.body.username })
        if (existingUser) {
            return res.status(400).json("Username already taken!")
        }
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        next(error)
    }
}

export let login = async (req, res, next) => {
    try {
        let user = await Users.findOne({ username: req.body.username })
        if (!user) return next(createError(401, "User not found"))

        let isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "Wrong Credentials"))

        const token = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin
            }, process.env.JWT)
        let { password, isAdmin, ...otherDetails } = user._doc
        res.
            cookie("access_token", token, {
                httpOnly: true
            }).status(200).json({ ...otherDetails })
    } catch (error) {
        next(error)
    }
}