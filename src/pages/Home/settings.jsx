import * as React from 'react';
import SideNav from "../layout/sideNav"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from "../layout/Navbar";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

export default function Settings() {
    const [open, setOpen] = React.useState(true);

    return (
        <>
            <Navbar open={open} onOpen={() => setOpen(!open)} />
            <Box height={65} />
            <Box sx={{ display: 'flex' }}>
                <SideNav open={open} />
                <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12,  sm:10, md: 8 ,lg:6}}>
                            <Item>xs: 12,  sm:10, md: 8 ,lg:6 ,xl: 4</Item>
                        </Grid>
                        <Grid size={{ xs: 12,sm:2, md: 4 ,lg:6}}>
                            <Item>xs: 12,sm:2, md: 4 ,lg:6,xl:4</Item>
                        </Grid>
                        <Grid size={{ xs: 6, md: 4 }}>
                            <Item>xs=6 md=4</Item>
                        </Grid>
                        <Grid size={{ xs: 6, md: 4 }}>
                            <Item>xs=6 md=4</Item>
                        </Grid>
                        <Grid size={{ xs: 6, md: 8 }}>
                            <Item>xs=6 md=8</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </>
    )
}

