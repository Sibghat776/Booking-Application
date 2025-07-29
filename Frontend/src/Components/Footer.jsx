import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Stack flexDirection={'row'} justifyContent={'space-around'} padding={"4rem 0px"}>
                <Box>
                    <ul className='space-y-1'>
                        <li>Countries</li>
                        <li>Region</li>
                        <li>Cities</li>
                        <li>Airports</li>
                        <li>Districts</li>
                        <li>Hotels</li>
                    </ul>
                </Box>
                <Box>
                    <ul className='space-y-1'>
                        <li>Countries</li>
                        <li>Region</li>
                        <li>Cities</li>
                        <li>Airports</li>
                        <li>Districts</li>
                        <li>Hotels</li>
                    </ul>
                </Box>
                <Box>
                    <ul className='space-y-1'>
                        <li>Countries</li>
                        <li>Region</li>
                        <li>Cities</li>
                        <li>Airports</li>
                        <li>Districts</li>
                        <li>Hotels</li>
                    </ul>
                </Box>
                <Box>
                    <ul className='space-y-1'>
                        <li>Countries</li>
                        <li>Region</li>
                        <li>Cities</li>
                        <li>Airports</li>
                        <li>Districts</li>
                        <li>Hotels</li>
                    </ul>
                </Box>
                <Box>
                    <ul className='space-y-1'>
                        <li>Countries</li>
                        <li>Region</li>
                        <li>Cities</li>
                        <li>Airports</li>
                        <li>Districts</li>
                        <li>Hotels</li>
                    </ul>
                </Box>
            </Stack>
            <Typography textAlign={'center'} fontWeight={"bolder"}>Copyright &copy; Sibghatbooking App.</Typography>
        </>
    )
}

export default Footer