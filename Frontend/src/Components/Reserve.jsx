import { Box, Button, Typography } from '@mui/material'
import CancelIcon from "@mui/icons-material/Cancel"
import useFetch from "../Hooks/useFetch"
import React, { useContext, useState } from 'react'
import { SearchContext } from '../Context/contextApi'
import { getDate } from 'date-fns'
import axios, { all } from 'axios'

const Reserve = ({ setOpenModal, hotelId }) => {
    const { date } = useContext(SearchContext)
    const [selectedRooms, setSelectedRooms] = useState([])
    let { data, loading, error } = useFetch(`http://localhost:5000/api/hotels/room/${hotelId}`)

    let getDateInRange = (startDate, endDate) => {

        let start = new Date(startDate)
        let end = new Date(endDate)
        let date = new Date(start.getTime())
        let list = []
        while (date <= end) {
            list.push(new Date(date).getTime())
            date.setDate(date.getDate() + 1)
        }
        return list
    }

    const allDates = getDateInRange(date[0].startDate, date[0].endDate)

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) => {
            return allDates.includes(new Date(date).getTime());
        });
        return !isFound;
    };


    const handleSelect = (e) => {
        let checked = e.target.checked
        let value = e.target.value
        setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter((item) => {
            item !== value
        }))
        setOpenModal(true)
    }
    const handleClick = async () => {
        try {
            await Promise.all(
                selectedRooms.map(roomId =>
                    axios.put(`http://localhost:5000/api/rooms/availability/${roomId}`, {
                        dates: allDates   // ✅ correct key (check backend expects this key)
                    })
                )
            );
            setOpenModal(false)
        } catch (error) {
            console.log("Reservation failed:", error);
        }
    }

    return (
        <>
            <Box className="flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.5)] fixed top-0 left-0">
                {data.map((item) => (
                    <Box className='bg-white rounded shadow-2xl text-black flex p-16 flex-col justify-center items-center'>
                        <Typography variant='h5'>Select your rooms:</Typography>
                        <Typography variant='p'>{item.desc}</Typography>
                        <Typography variant='p'>Max People: {item.maxPeople}</Typography>
                        <Typography variant='p'>Price: {item.price}</Typography>
                        {item.roomNumbers.map((roomNumber) => (
                            <Box className='flex flex-row gap-4'>
                                <Typography variant='body1'>{roomNumber.number}</Typography>
                                <input type="checkbox" disabled={!isAvailable(roomNumber)} value={roomNumber._id} onChange={handleSelect} />
                            </Box>
                        ))}
                        <Button
                            variant="contained"
                            className="!bg-[#31572c] !text-white !font-semibold normal-case !text-sm"
                            onClick={handleClick}
                        >
                            Reserve Now!
                        </Button>
                    </Box>
                ))}
                <CancelIcon className='cancelIcon' onClick={() => setOpenModal(false)} />
            </Box>
        </>
    )
}

export default Reserve