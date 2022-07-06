import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CssBaseline } from "@mui/material";

const CardConnect = ({ svg, title, desc }) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>

                <CssBaseline />
                <CardActionArea >
                    <Typography sx={{ m: 3 }}>

                        <i className={`${svg}`}></i>
                    </Typography>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default CardConnect