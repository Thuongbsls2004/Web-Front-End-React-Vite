import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LockPersonIcon from '@mui/icons-material/LockPersonOutlined';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import {Link as LinkTo}  from "react-router-dom";

export default function LoginScreen() {
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
                <Box
                    sx={{
                        width: ['90%', '60%', '50%'],
                        padding: 2,
                        boxShadow: 3,
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        textAlign: 'center'
                    }}
                >
                    <Avatar sx={{ bgcolor: 'green', color: 'white', width: 60, height: 60, margin: '0 auto' }}>
                        <LockPersonIcon sx={{ fontSize: 50 }} />
                    </Avatar>
                    <Typography variant="h5" component="h1" sx={{ mt: 2, mb: 2, fontWeight: 'bold' }}>
                        <LinkTo to ={`/login`}> Sign in </LinkTo> || <LinkTo to ={`/register`}> Sign up </LinkTo>
                    </Typography>
                    <TextField label="Username *" fullWidth margin="normal" variant='standard'/>
                    <TextField label="Password *" type="password" fullWidth margin="normal" variant='standard' />
                    <Box sx={{ textAlign: 'left', width: '100%', pl: 1 }}>
                        <FormControlLabel
                            control={<Checkbox name="remember" color="primary" />}
                            label="Remember me"
                        />
                    </Box>
                    <Button variant="contained" color="primary" fullWidth>Login</Button>
                    <Box sx={{ textAlign: 'left', mt: 2 }}>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Box>
                    <Box sx={{ textAlign: 'left', mt: 1 }}>
                        <Typography variant="body2">
                            Don't have an account? <Link href="/register">Sign Up</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
