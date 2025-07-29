import Hotels from "../Models/Hotels.js"
import Room from "../Models/Rooms.js"

export let createHotel = async (req, res, next) => {
    let newHotel = new Hotels(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        next(error)
    }
}

export let updateHotel = async (req, res, next) => {
    try {
        let updatedHotel = await Hotels.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (error) {
        next(error)
    }
}

export let getHotels = async (req, res, next) => {
    let { min, max, limit, featured, ...others } = req.query;

    if (featured !== undefined) {
        featured = featured === 'true';
    }

    const minPrice = min ? parseInt(min) : 1;
    const maxPrice = max ? parseInt(max) : 9999;
    const limitVal = limit ? parseInt(limit) : 0;

    try {
        console.log({ featured, minPrice, maxPrice, limitVal, others });

        const allHotels = await Hotels.find({
            ...others,
            ...(featured !== undefined && { featured }),
            price: {
                $gte: minPrice,
                $lte: maxPrice
            }
        }).limit(limitVal);

        res.status(200).json(allHotels);
    } catch (error) {
        next(error);
    }
};

export let countByCity = async (req, res, next) => {
    let cities = req.query.cities.split(",")
    try {
        let list = await Promise.all(cities.map(city => {
            return Hotels.countDocuments({ city: city })
        }))
        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}

export let countByType = async (req, res, next) => {
    try {
        let hotelCount = await Hotels.countDocuments({ type: "hotel" })
        let appartmentCount = await Hotels.countDocuments({ type: "appartment" })
        let resortCount = await Hotels.countDocuments({ type: "resort" })
        let villaCount = await Hotels.countDocuments({ type: "villa" })
        let cabinCount = await Hotels.countDocuments({ type: "cabin" })
        res.status(200).json([
            { type: "hotel", count: hotelCount },
            { type: "appartment", count: appartmentCount },
            { type: "resorts", count: resortCount },
            { type: "villa", count: villaCount },
            { type: "cabin", count: cabinCount },
        ])
    } catch (error) {
        next(error)
    }
}

export let getHotel = async (req, res, next) => {
    try {
        let oneHotel = await Hotels.findById(req.params.id)
        res.status(200).json(oneHotel)
    } catch (error) {
        next(error)
    }
}

export let deleteHotel = async (req, res, next) => {
    try {
        await Hotels.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotels.findById(req.params.id)
        const list = await Promise.all(hotel.rooms.map((room) => {
            return Room.findById(room)
        }))
        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}