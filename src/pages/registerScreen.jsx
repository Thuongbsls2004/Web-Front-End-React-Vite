import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { Link as LinkTo } from "react-router-dom";
import Grid from '@mui/material/Grid2';


export default function registerScreen() {
    return (
        <>
            <Box
                sx={{

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    flexDirection: 'column'
                }}
            >
                <Grid container spacing={2}>
                    <Grid size={{xs:0 ,md:6}}>
                        <Box >
                            <img src="../dist/new3.jpg" alt="" />
                        </Box>
                    </Grid>
                    <Grid size={{md:6}}>
                        <Box
                            sx={{
                                padding: 2,
                                boxShadow: 3,
                                borderRadius: 2,
                                bgcolor: 'background.paper',
                                textAlign: 'center'
                            }}
                        >
                            <Avatar sx={{ bgcolor: 'green', color: 'white', width: 60, height: 60, margin: '0 auto' }}>
                                <PersonAddAltOutlinedIcon sx={{ fontSize: 50 }} />
                            </Avatar>
                            <Typography variant="h5" component="h1" sx={{ mt: 2, mb: 2, fontWeight: 'bold' }}>
                                <LinkTo to={`/login`}> Sign in </LinkTo> || <LinkTo to={`/register`}> Sign up </LinkTo>
                            </Typography>
                            <TextField label="Username *" fullWidth margin="normal" variant='standard' />
                            <TextField label="Password *" type="password" fullWidth margin="normal" variant='standard' />
                            <TextField label="Repassword *" type="repassword" fullWidth margin="normal" variant='standard' />
                            <Box sx={{ textAlign: 'left', width: '100%', pl: 1, mr: 0, display: 'flex', alignItems: "center" }}>
                                <FormControlLabel className='m-0'
                                    control={<Checkbox name="remember"  color="primary" />} />
                                <Typography variant='body2'>
                                    I agree to the <Link href="#">terms and services</Link>
                                </Typography>
                            </Box>
                            <Button variant="contained" color="primary" fullWidth>Register</Button>
                            <Box sx={{ textAlign: 'left', mt: 1 }}>
                                <Typography variant="body2">
                                    Already have an account? <Link href="/login">Sign In</Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}