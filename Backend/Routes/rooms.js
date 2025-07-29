import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../Controllers/roomsController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

let route = express.Router()

// CREATE
route.post("/:hotelId", verifyAdmin, createRoom)

// UPDATE
route.put("/:id", verifyAdmin, updateRoom)
route.put("/availability/:id", updateRoomAvailability)

// GETONE
route.get("/:id", getRoom)

// GETALL
route.get("/", getRooms)

// DELETE
route.delete("/:id/:hotelid", verifyAdmin, deleteRoom)

export default route