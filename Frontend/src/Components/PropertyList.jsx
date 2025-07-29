import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Typography } from '@mui/material';
import "./featured.css"
import useFetch from '../Hooks/useFetch';

export default function PropertyList() {
    let { data, loading, error } = useFetch("http://localhost:5000/api/hotels/countByType")
    return (
        <Box>
            {
                loading ? "Loading..." : (
                    <ImageList
                        sx={{ width: "100%", height: 225, margin: "2rem 0px" }}
                        cols={5}
                        gap={1}
                        rowHeight={225}>
                        {itemData.map((item, i) => (
                            <ImageListItem key={item.img} sx={{ display: 'flex', alignItems: "flex-start", flexDirection: 'column', justifyContent: "space-between" }}>
                                {/* Image Container with fixed size */}
                                <Box className="w-full h-[11rem] px-2 overflow-hidden rounded-xl">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </Box>
                                {data[i] && (
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            className="browseProperty text-start capitalize font-semibold"
                                        >
                                            {data[i].type}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            className="text-lg text-gray-600"
                                        >
                                            {data[i].count + " " + data[i].type}
                                        </Typography>
                                    </Box>
                                )}

                            </ImageListItem>
                        ))}
                    </ImageList>
                )
            }
        </Box>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        img: 'https://images.unsplash.com/photo-1575538678914-1eaadc023b5f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1683888724549-73a380c5ed68?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        img: 'https://images.unsplash.com/photo-1537197518227-a36efeafd477?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
];
