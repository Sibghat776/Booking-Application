import React, { useContext, useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    InputAdornment,
    IconButton,
    Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext, AuthContextProvider } from "../Context/Auth"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../showToast';

const LoginCard = styled(Paper)(() => ({
    padding: '2.5rem',
    borderRadius: '1.75rem',
    maxWidth: '400px',
    width: '100%',
    backgroundColor: '#ffffff',
    boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
    backdropFilter: 'blur(10px)',
}));

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })
    const { user, loading, error, dispatch } = useContext(AuthContext)
    const togglePasswordVisibility = () => setShowPassword(prev => !prev);
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        if (!credentials.username || !credentials.password) {
            showToast("Missing Fields!", "error", "dark")
            return;
        }
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", credentials)
            console.log(res)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            showToast("Login Successfully", "success", "light")
            navigate("/")
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error.response.data })
            showToast("Wrong Credentials", "error", "dark")
        }
    };


    const handleChange = (e) => {
        setCredentials((prev) => (
            { ...prev, [e.target.id]: e.target.value }
        ))
    }

    return (
        <Box
            className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 flex items-center justify-center"
        >
            <ToastContainer />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <LoginCard>
                    <Typography variant="h5" className="text-[#132a13] font-bold text-center mb-1">
                        Welcome Back
                    </Typography>
                    <Typography className="text-gray-600 text-center mb-6">
                        Login to continue your journey
                    </Typography>

                    <TextField
                        onChange={handleChange}
                        fullWidth
                        id='username'
                        label="username"
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle className="text-[#31572c]" />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        onChange={handleChange}
                        fullWidth
                        id='password'
                        label="Password"
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock className="text-[#31572c]" />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={togglePasswordVisibility}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<LoginIcon />}
                        onClick={handleLogin}
                        disabled={loading}
                        style={{
                            backgroundColor: '#4f772d',
                            marginTop: '1.5rem',
                            padding: '0.75rem',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            borderRadius: '0.75rem'
                        }}
                    >
                        Login
                    </Button>

                    <Typography className="text-center text-sm text-gray-600 mt-5">
                        Don't have an account?{' '}
                        <a href="/register" className="text-[#4f772d] font-semibold hover:underline">
                            Sign up
                        </a>
                    </Typography>
                </LoginCard>
            </motion.div>
        </Box>
    );
};

export default Login;
