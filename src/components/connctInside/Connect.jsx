import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CardConnect from '../cards/CardConnect'
import CardDB from '../cards/CardDB'

const Connect = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 1200,
            margin: 'auto',
        }}>
            <Box sx={{
                m: 5,
            }}>
                <Typography>
                    What's inside
                </Typography>
                <Typography variant='h4' sx={{ fontWeight: "bold", maxWidth: 400 }}>
                    Connect can bring charm to your website.
                </Typography>
                <Typography>
                    Get straight to the point always, people find it attractive when they visit your website
                </Typography>
            </Box >
            <div className="cards_box ">
                {
                    CardDB.map((data) => (
                        <>
                            <CardConnect svg={data.svg} title={data.title} desc={data.desc} />

                        </>
                    ))
                }
            </div>
        </Box>
    )
}

export default Connect