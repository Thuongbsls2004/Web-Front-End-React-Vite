import * as React from 'react';
import SideNav from "../layout/sideNav"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from "../layout/Navbar";

export default function About() {
    const [open, setOpen] = React.useState(true);
    return (
        <>
            <Navbar open={open} onOpen={() => setOpen(!open)} />
            <Box height={65} />
            <Box sx={{ display: 'flex' }}>
                <SideNav open={open} />
                <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                    <h1>About</h1>
                </Box>
            </Box>

        </>
    )
}

