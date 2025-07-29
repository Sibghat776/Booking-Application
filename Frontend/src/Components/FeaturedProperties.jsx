import { Box, Button, Chip, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import React from 'react'
import useFetch from '../Hooks/useFetch';

const FeaturedProperties = () => {
    const { data, loading, error } = useFetch("http://localhost:5000/api/hotels?featured=true&limit=4")
    console.log("data", data)
    return (
        <>
            {loading ? "Loading..." :
                <ImageList
                    sx={{ width: "100%", height: 400, margin: "2rem 0px" }}
                    cols={4}
                    gap={0}
                    rowHeight={400}>
                    {data.map((data, i) => (
                        <ImageListItem key={data.photos + i} sx={{ gap: "0.2rem", display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                            <Box className="w-full px-2 h-full overflow-hidden rounded-2xl">
                                {img.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={data.name}
                                        loading="lazy"
                                        className="w-full h-full p-0 object-cover"
                                    />
                                ))
                                }
                            </Box>
                            <Typography
                                variant="h6"
                                className="browseProperty text-start capitalize font-semibold"
                            >
                                {data.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                className="text-lg capitalize text-gray-600"
                            >
                                {data.city}
                            </Typography>
                            <Typography
                                variant="body2"
                                className="text-lg text-gray-900"
                            >
                                {"Starting from " + data.price}
                            </Typography>
                            {data.rating && <Stack flexDirection={'row'} alignItems={'center'} gap={"0.3rem"}>
                                <Chip label={data.rating} style={{ margin: "0.4rem 0px", height: "1.3rem", backgroundColor: "#132a13", color: "#ecf39e", width: "20%", borderRadius: "2px" }} />
                                <Typography variant='p'>{data.name}</Typography>
                            </Stack>}
                        </ImageListItem>
                    ))}
                </ImageList>
            }
        </>
    )
}

export default FeaturedProperties
let img = [
    "https://images.pexels.com/photos/31739395/pexels-photo-31739395.jpeg"
]