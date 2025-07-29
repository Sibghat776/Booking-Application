import express from "express";
import { deleteUser, updateUser, getUser, getUsers } from "../Controllers/usersController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

let route = express.Router()

// route.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("You are logged in Successfully")
// })

// route.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("You are logged in Successfully and you can delete your account")
// })

// route.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin, You are logged in Successfully and you can delete all accounts")
// })

// UPDATE
route.put("/:id", verifyUser, updateUser)

// GETONE
route.get("/:id", verifyUser, getUser)

// GETALL
route.get("/", verifyAdmin, getUsers)

// DELETE
route.delete("/:id", verifyUser, deleteUser)

export default route