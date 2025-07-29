import Rooms from "../Models/Rooms.js";
import Hotels from "../Models/Hotels.js";
import { createError } from "../utils/error.js";

export let createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId
    const newRoom = new Rooms(req.body)

    try {
        let savedRoom = await newRoom.save()
        try {
            await Hotels.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } })
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
        next(error)
    }
}


export let updateRoom = async (req, res, next) => {
    try {
        let updatedRoom = await Rooms.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedRoom)
    } catch (error) {
        next(error)
    }
}
export let updateRoomAvailability = async (req, res, next) => {
    try {
        await Rooms.updateOne({ "roomNumbers._id": req.params.id },
            {
                $push: {
                    "roomNumbers.$.unavailableDates": req.body.dates
                }
            }
        )
        res.status(200).json("Room Status has been updated")
    } catch (error) {
        next(error)
    }
}
export let getRooms = async (req, res, next) => {
    try {
        let allRooms = await Rooms.find(req.body)
        res.status(200).json(allRooms)
    } catch (error) {
        next(error)
    }
}

export let getRoom = async (req, res, next) => {
    try {
        let oneRoom = await Rooms.findById(req.params.id)
        res.status(200).json(oneRoom)
    } catch (error) {
        next(error)
    }
}

export let deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid
    try {
        await Rooms.findByIdAndDelete(req.params.id)
        try {
            await Hotels.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } })
        } catch (error) {
            next(error)
        }
        res.status(200).json("Room has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}
