import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, IconButton, Tabs, Tab, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './navbar.css'



export default function Navbar() {
    const [menu, setMenu] = useState(true)
    return (
        <>
            <AppBar sx={{ background: "#fff", color: '#000' }}>
                <Toolbar sx={{
                    mt: 2,
                    display: "flex", justifyContent: "space-around", alignItems: "flex-start",
                }}>
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                        <span onClick={() => setMenu(menu => !menu)} className="cur">
                            <i className="fa-solid fa-bars hide m-2" ></i>
                        </span>
                        <Typography sx={{ fontWeight: "bold" }} variant="h5">
                            Connect.
                        </Typography>
                    </Typography>
                    <Typography sx={{
                        display: "flex", justifyContent: "flex-start", alignItems: "center"
                    }}>
                        <div className={` ${menu ? 'hide-two' : null}`}>
                            <Tabs sx={{
                                textColor: "inherit", fontWeight: "bold",
                                mr: 2
                            }}>
                                <Tab label='Product' />
                                <Tab label='Features' />
                                <Tab label='Reviews' />
                                <Tab label='Pricing' />
                                <Tab label='FAQ' />
                                <Button variant="outlined" sx={{ mb: 2 }}>DOWNLOAD</Button>
                            </Tabs>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}
