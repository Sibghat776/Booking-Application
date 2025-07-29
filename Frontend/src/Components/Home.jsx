import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Box, Typography } from '@mui/material'
import Featured from './Featured.jsx'
import './featured.css'
import PropertyList from './PropertyList.jsx'
import FeaturedProperties from './FeaturedProperties.jsx'
import EmailList from './EmailList.jsx'
import Footer from './Footer.jsx'
import { useLocation } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Box className="px-[9rem]">
                <Featured />
                <Typography className='font-serif browseProperty' margin={"2rem 0px"} variant='h5'>
                    Browse by property type.
                </Typography>
                <PropertyList />
                <Typography className='font-serif browseProperty' margin={"2rem 0px"} variant='h5'>
                    Home Guests Love.
                </Typography>
                <FeaturedProperties />
            </Box>
            <EmailList />
            <Footer />
        </>
    )
}

export default Home