// E:\Sibghat Ullah\Booking App\Backend\Routes\users.js

import express from "express";
import { deleteUser, updateUser, getUser, getUsers } from "../Controllers/usersController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

let route = express.Router();

// GETALL (Sabse pehle rakhen)
route.get("/", verifyAdmin, getUsers);

// UPDATE
route.put("/:id", verifyUser, updateUser);

// GETONE (Ab yeh /:id ko sahi se match karega)
route.get("/:id", verifyUser, getUser);

// DELETE
route.delete("/:id", verifyUser, deleteUser);

export default route;