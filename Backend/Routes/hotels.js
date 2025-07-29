import express from "express";
import { createHotel, deleteHotel, updateHotel, getHotel, getHotels, countByCity, countByType, getHotelRooms } from "../Controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

let route = express.Router()

// CREATE
route.post("/", verifyAdmin, createHotel)

// UPDATE
route.put("/:id", verifyAdmin, updateHotel)

// GETONE
route.get("/find/:id", getHotel)

// GETALL
route.get("/", getHotels)
route.get("/countByCity", countByCity)
route.get("/countByType", countByType)
route.get("/room/:id", getHotelRooms)

// DELETE
route.delete("/:id", verifyAdmin, deleteHotel)

export default route