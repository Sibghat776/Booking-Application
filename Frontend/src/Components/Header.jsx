import react, { Children, useContext } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import HotelIcon from '@mui/icons-material/Hotel';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import FlightIcon from '@mui/icons-material/Flight';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from "@mui/material"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import TextField from '@mui/material/TextField';
import { Calendar, DateRangePicker } from 'react-date-range';
import React, { useState } from 'react';
import { addDays } from 'date-fns';
import { format } from 'date-fns';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';
import "./header.css"
import { SearchContext } from '../Context/contextApi';
import { AuthContext } from '../Context/Auth';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function Header({ type }) {
    let [openDate, setOpenDate] = useState(false)
    let [destination, setDestination] = useState("")
    let navigate = useNavigate()
    const { dispatch } = useContext(SearchContext)
    const { user } = useContext(AuthContext)

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [options, setOptions] = useState(
        {
            adult: 1,
            children: 0,
            room: 1
        }
    )
    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, date, options } })
        navigate("/hotels", { state: { destination, date, options } })
    }
    const [openOptions, setOpenOptions] = useState(false)
    const handleOption = (name, operation) => {
        setOptions((prev) => {
                return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        });
    }

    return (
        <div className='max-w-screen bg-[#132a13] px-1 pt-7'>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
                className='w-screen-sm px-40 pt-4 pb-4'
            >
                <Item style={{ backgroundColor: "transparent", borderRadius: "20px", color: "#F7FFF4", border: "1px solid #F7FFF4", display: "flex", fontSize: "0.8rem", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "10px" }}><HotelIcon style={{ fontSize: "1.2rem" }} />Stays</Item>
                <Item style={{ backgroundColor: "transparent", boxShadow: "none", color: "#F7FFF4", display: "flex", fontSize: "0.8rem", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "10px" }}><FlightIcon style={{ fontSize: "1.2rem" }} />Flights</Item>
                <Item style={{ backgroundColor: "transparent", boxShadow: "none", color: "#F7FFF4", display: "flex", fontSize: "0.8rem", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "10px" }}><TimeToLeaveIcon style={{ fontSize: "1.2rem" }} />Car rentals</Item>
                <Item style={{ backgroundColor: "transparent", boxShadow: "none", color: "#F7FFF4", display: "flex", fontSize: "0.8rem", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "10px" }}><HotelIcon style={{ fontSize: "1.2rem" }} />Attractions</Item>
                <Item style={{ backgroundColor: "transparent", boxShadow: "none", color: "#F7FFF4", display: "flex", fontSize: "0.8rem", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "10px" }}><LocalTaxiIcon style={{ fontSize: "1.2rem" }} />Airport Taxi</Item>
            </Stack>
            {type !== "list" &&
                <>

                    <Typography variant="h3" color='#F7FFF4' paddingX={"160px"} paddingY={"10px"} component="h2">
                        A lifetime of discount? It's Genius.
                    </Typography>

                    <Typography variant="p" color='#F7FFF4' paddingX={"160px"} paddingBottom={"10px"} component="p">
                        Get rewarded fro your travels - unlock instant savings of 10% or more with a free Sibghat booking account.
                    </Typography>
                    {!user && <Button variant="contained" style={{ backgroundColor: "#31572c", margin: "20px 160px" }}><a href='/register'>Sign in / Register</a></Button>}
                    <Stack className='justify-center items-center'>
                        <Stack direction="row" className='bg-[#ecf39e] rounded top-8 relative w-[80%] items-center justify-center p-1 border-[#90a955] border-4' spacing={3}>
                            <Item style={{ display: "flex", justifyContent: "center", width: "30%", fontSize: "1rem", boxShadow: "none", height: "100%", color: "#132a13", alignItems: "center", gap: "16px", backgroundColor: "transparent" }}><HotelIcon /><TextField variant='standard' onChange={e => setDestination(e.target.value)} className='border-none' placeholder='Where are you going?' /></Item>
                            <Item className='relative' style={{ backgroundColor: "transparent", width: "30%", fontSize: "0.9rem", boxShadow: "none", height: "100%", color: "#132a13", cursor: "pointer" }} onClick={() => {
                                setOpenDate(!openDate)
                                if (openDate) {
                                    setOpenOptions(false)
                                }
                            }}><CalendarMonthIcon className='mx-4' />{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                                {openDate && <DateRangePicker
                                    className="dateRange z-10 no-sidebar"
                                    onChange={item => setDate([item.selection])}
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={true}
                                    months={1}
                                    ranges={date}
                                    minDate={new Date()}
                                    showDateDisplay={true}
                                    staticRanges={[]}
                                    inputRanges={[]}
                                    direction="horizontal"
                                />

                                }
                            </Item>
                            <Item onClick={() => {
                                setOpenOptions(!openOptions)
                            }} style={{ position: "relative", backgroundColor: "transparent", fontSize: "0.9rem", cursor: "pointer", width: "30%", boxShadow: "none", height: "100%", color: "#132a13" }}><GroupIcon className='mx-4' />{`${options.adult} Adult ${options.children} Children  ${options.room} Room`}</Item>
                            {openOptions && <Box className='absolute z-10 top-[65px] flex flex-col justify-center items-center gap-4 bg-[#4f772d] text-[#ecf39e] p-2 border-[#90a955] border-2 right-[320px]'>
                                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={"10px"}>
                                    <Button disabled={options.adult <= 1} variant="contained" style={{ backgroundColor: "#132a13" }} onClick={() => handleOption("adult", "d")}>-</Button>
                                    <Typography>{options.adult}</Typography>
                                    <Button variant="contained" style={{ backgroundColor: "#132a13" }} onClick={() => handleOption("adult", "i")}>+</Button>
                                </Stack>
                                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={"10px"}>
                                    <Button disabled={options.children <= 0} variant="contained" style={{ backgroundColor: "#132a13" }} onClick={() => handleOption("children", "d")}>-</Button>
                                    <Typography>{options.children}</Typography>
                                    <Button variant="contained" style={{ backgroundColor: "#132a13" }} onClick={() => handleOption("children", "i")}>+</Button>
                                </Stack>
                                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={"10px"}>
                                    <Button disabled={options.room <= 1} variant="contained" style={{ backgroundColor: "#132a13" }} onClick={() => handleOption("room", "d")}>-</Button>
                                    <Typography>{options.room}</Typography>
                                    <Button variant="contained" style={{ backgroundColor: "#132a13" }} onClick={() => handleOption("room", "i")}>+</Button>
                                </Stack>
                            </Box>
                            }
                            <Button variant="contained" color="success" onClick={handleSearch} style={{ marginRight: "19px" }}>Search</Button>
                        </Stack>
                    </Stack>
                </>
            }
        </div>
    );
}
