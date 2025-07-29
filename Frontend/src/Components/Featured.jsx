import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import "./featured.css"
import useFetch from '../Hooks/useFetch.js'

const Featured = () => {
    let { data, loading, error } = useFetch("http://localhost:5000/api/hotels/countByCity?cities=jedda,madina,makka")

    return (
        <>
            <Box>
                <Stack className='imgContainer'>
                    {loading ? "Loading... Please Wait" :
                        <>
                            <Box className="item">
                                <img src="https://images.pexels.com/photos/32354962/pexels-photo-32354962.jpeg" alt="" />
                                <Box className="overlay" />
                                <Box className="hotelText">
                                    <Typography variant="h3" className='hotelName' component={"h3"}>Madinah</Typography>
                                    <Typography variant="h6">{data[1]} Properties</Typography>
                                </Box>
                            </Box>
                            <Box className="item">
                                <img src="https://media.istockphoto.com/id/1248308148/photo/jeddah-corniche-aerial-view-2018.jpg?s=612x612&w=0&k=20&c=fK55MU6RxzClhcx8EsYo6xmwmty3kbzZQnImAvezujE=" alt="" />
                                <Box className="overlay" />
                                <Box className="hotelText">
                                    <Typography variant="h3" className='hotelName' component={"h3"}>Jeddah</Typography>
                                    <Typography variant="h6">{data[0]} Properties</Typography>
                                </Box>
                            </Box>
                            <Box className="item">
                                <img src="https://media.istockphoto.com/id/482206266/photo/kaaba-in-mecca.jpg?s=612x612&w=0&k=20&c=wwzNu3XMQpCRVdAcBbeerUGaew0Fk2nGPQkH98Wj474=" alt="" />
                                <Box className="overlay" />
                                <Box className="hotelText">
                                    <Typography variant="h3" className='hotelName' component={"h3"}>Makkah</Typography>
                                    <Typography variant="h6">{data[2]} Properties</Typography>
                                </Box>
                            </Box>
                        </>
                    }
                </Stack>
            </Box>
        </>
    )
}

export default Featured