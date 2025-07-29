import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export let verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(createError(401, "you are not authenticated"))

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(400, "Invalid Token!"))
        req.user = user
        next()
    })

}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        }
        else {
            next(createError(401, "You are note authorized"))
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next()
        }
        else {
            next(createError(401, "You are not authorized"))
        }
    })
}