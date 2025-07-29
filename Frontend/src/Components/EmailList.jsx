import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const EmailList = () => {
    return (
        <>
            <Stack padding={"2rem"} color={"#132a13"} flexDirection={"column"} justifyContent={'center'} alignItems={'center'} width={"100%"} bgcolor={"#ecf39e"}>
                <Box>
                    <Typography textAlign={"center"} fontWeight={"bolder"} variant='h5'>Save time, save money</Typography>
                    <Typography textAlign={"center"} padding={"0px 0px 1.4rem 0px"} fontWeight={"bolder"} variant='h6'>Sign up and we'll send the best deals for you</Typography>
                    <Stack flexDirection={'row'} justifyContent={'start'} alignItems={'center'} >
                        <input placeholder='Your email' style={{ padding: "2% 7%", width: "100%", borderBottomLeftRadius: "0.4rem", borderTopLeftRadius: "0.4rem", fontWeight: "bold", backgroundColor: "white" }} variant='outlined' />
                        <button style={{ borderBottomRightRadius: "0.4rem", borderTopRightRadius: "0.4rem", padding: "2% 7%", backgroundColor: "#31572c", color: "white", fontWeight: "bold" }}>Subscribe</button>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}

export default EmailList