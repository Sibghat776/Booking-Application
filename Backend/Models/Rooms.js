import mongoose from "mongoose";
let { Schema } = mongoose

let RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    roomNumbers: [
        {
            number: {
                type: Number,
                required: true
            },
            unavailableDates: {
                type: [Date]
            }
        }
    ]
},
    { timestamps: true }
);

export default mongoose.model("Room", RoomSchema)