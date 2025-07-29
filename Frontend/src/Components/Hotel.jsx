import React, { useContext, useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Box, Button, Stack, Typography } from '@mui/material'
import "./Hotel.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from "./Footer"
import EmailList from "./EmailList"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CancelIcon from '@mui/icons-material/Cancel';
import { useLocation, useNavigate } from 'react-router-dom'
import useFetch from "../Hooks/useFetch"
import { SearchContext } from '../Context/contextApi'
import { AuthContext } from '../Context/Auth'

const Hotel = () => {
    const { date, options } = useContext(SearchContext)
    const { user } = useContext(AuthContext)
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime())
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY)
        return diffDays
    }
    const [openModal, setOpenModal] = useState(false)
    const days = dayDifference(date[0].endDate, date[0].startDate)
    const navigate = useNavigate()
    const location = useLocation()
    let path = location.pathname.split("/")
    let id = path[2]
    const { data, loading, error } = useFetch(`http://localhost:5000/api/hotels/find/${id}`)
    let [slideNumber, setSlideNumber] = useState(0);
    let [open, setOpen] = useState(false)

    let handleOpen = (i) => {
        setSlideNumber(i)
        setOpen(!open)
    }
    let handleOperation = (operation) => {
        let newSlideNumber;
        if (operation === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber)
    }
    const handleClick = () => {
        if (!user) {
            navigate("/login")
        } else {
            setOpenModal(true)
        }
    }
    return (
        <>
            <Navbar />
            <Header type="list" />
            <Box className="hotelContainer">
                {open &&
                    <Box className="slider">
                        <CancelIcon className='cancelIcon' onClick={() => setOpen(!open)} />
                        <ArrowCircleLeftIcon className='arrow' onClick={() => handleOperation("l")} />
                        <Box className="slideWrapper">
                            <img src={img[slideNumber].src} alt="" />
                        </Box>
                        <ArrowCircleRightIcon className='arrow' onClick={() => handleOperation("r")} />
                    </Box>
                }
                {loading ? "Loading" :
                    <Stack className='hotelMainStack'>
                        <Box className="hotelHead">
                            <Box className="hotelNames">
                                <Typography variant='h5' className='bold'>{data.name}</Typography>
                                <Typography className='flex justify-start items-center sm'> <LocationOnIcon className='sm' />Elton St 125 New York</Typography>
                                <Typography className='text-blue-700'>Excellent location - {data.distance} from center</Typography>
                                <Typography className='text-green-600 bold'>Book a stay over ${data.price} at this property and get a free airport taxi</Typography>
                            </Box>
                            <Button
                                variant="contained"
                                className="!bg-[#31572c] !text-white !font-semibold normal-case !text-sm"
                                onClick={handleClick}
                            >
                                Reserve or Book Now!
                            </Button>
                        </Box>
                        <Stack className="hotelImgStack">
                            {img.map((img, i) => (
                                <>
                                    <img onClick={() => handleOpen(i)} className='cursor-pointer' src={img.src} alt="" />
                                </>
                            ))}
                        </Stack>
                        <Box className="hotelDesc">
                            <Box className="flex flex-col md:flex-row justify-between gap-3 py-10 rounded-lg w-full">
                                {/* LEFT SIDE - Description */}
                                <Box className="md:w-[70%] flex flex-col gap-6">
                                    <Typography variant="h5" className="font-bold bold text-black mb-2">
                                        Stay in the heart of {data.name}
                                    </Typography>
                                    <Typography variant="body2" className="text-sm text-gray-800 leading-relaxed">
                                        {data.desc}
                                    </Typography>
                                </Box>

                                {/* RIGHT SIDE - Offer Box */}
                                <Box className="bg-[#faffc9] h-[15rem] md:w-[30%] rounded-lg p-4 flex flex-col justify-between">
                                    <Typography variant="h6" className="font-bold bold text-gray-800 mb-2">
                                        Perfect for a {days}-night stay!
                                    </Typography>
                                    <Typography variant="body2" className="text-gray-700">
                                        Located in the real heart of Krakow, this property has an excellent location score of 9.8!
                                    </Typography>
                                    <Typography variant="h6" className="font-bold text-gray-900 mb-2">
                                        ${days * data.price * options.room} <span className="text-4xl font-thin">({days} nights)</span>
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        className="!bg-[#31572c] !text-white !font-semibold normal-case !text-sm"
                                        onClick={handleClick}
                                    >
                                        Reserve or Book Now!
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>}
            </Box>
            <EmailList />
            <Footer />
        </>
    )
}

export default Hotel
let img = [
    {
        src: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1687960116833-f96f224aabea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1687960116764-cc30286da413?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1687960116764-cc30286da413?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1687960116764-f3526d29dae6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1723823036117-5431e3adefce?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]