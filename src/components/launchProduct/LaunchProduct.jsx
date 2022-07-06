
import { Box, Typography, Button } from '@mui/material';
import React from 'react'
import webImg from '../../assets/webImage.png'
const LaunchProduct = () => {
    return (
        <>
            <div className="container">
                <Box sx={{
                    bgcolor: '#cfe8fc',
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Box sx={{
                        m: 5,
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                    }}>
                        <Typography>Launch your Product</Typography>
                        <Typography variant="h4" sx={{
                            fontWeight: "bold",
                            maxWidth: 400
                        }}>Connect better with intractive stream</Typography>
                        <Typography>
                            <Button variant="outlined" sx={{ m: 2 }}>SEE MORE</Button>
                            <Button variant="contained" color="success">DOWNLOAD</Button>
                        </Typography>
                        <Typography>Free unrestricted uses for 14 days no credit card required*</Typography>

                    </Box>
                    <Box>
                        <img src={webImg} alt="" />

                    </Box>
                </Box>
            </div>

        </>
    )
}

export default LaunchProduct