import mongoose from "mongoose";
let { Schema } = mongoose

let HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
    },
    desc: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    price: {
        type: Number,
        required: true
    },
    rooms: {
        type:[String],
    }
})

export default mongoose.model("Hotel", HotelSchema)