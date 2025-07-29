        // E:\Sibghat Ullah\Booking App\Backend\Routes\rooms.js

import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../Controllers/roomsController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

let route = express.Router()

// CREATE
route.post("/:hotelId", verifyAdmin, createRoom)

// UPDATE
route.put("/:id", verifyAdmin, updateRoom)
route.put("/availability/:id", updateRoomAvailability)

// GETALL (Sabse pehle rakhen)
route.get("/", getRooms) // <-- Yeh route ab pehle hai

// GETONE (Ab yeh /:id ko sahi se match karega)
route.get("/:id", getRoom) // <-- Yeh route ab baad mein hai

// DELETE
route.delete("/:id/:hotelid", verifyAdmin, deleteRoom)

export default route