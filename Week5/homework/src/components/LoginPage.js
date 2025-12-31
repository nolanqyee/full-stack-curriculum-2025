import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Alert,
    Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "../contexts/AuthContext";

function LoginPage() {
    // Access the MUI theme for potential theme-related functionalities.
    const theme = useTheme();

    // TODO: Extract login function and error from our authentication context.
    const { loginError, login, register } = useAuth();

    // State to hold the email and password entered by the user.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // State to toggle between login and register mode
    const [isRegisterMode, setIsRegisterMode] = useState(false);

    // TODO: Handle login function.
    const handleLogin = () => {
        login(email, password);
    };

    const handleRegister = () => {
        register(email, password);
    };
    
    const toggleMode = () => {
        setIsRegisterMode(!isRegisterMode);
        setEmail("");
        setPassword("");
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    component="img"
                    sx={{
                        marginBottom: 2,
                        height: 200,
                        width: 200,
                    }}
                    alt="UT Longhorn"
                    src="/longhorn.jpg"
                ></Box>
                <Typography component="h1" variant="h4" fontWeight="bold">
                    {isRegisterMode ? "Register" : "Login"}
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        type="email"
                        InputLabelProps={{ shrink: true }}
                        placeholder="Enter your email address"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        InputLabelProps={{ shrink: true }}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={isRegisterMode ? handleRegister : handleLogin}
                    >
                        {isRegisterMode ? "Register" : "Login"}
                    </Button>
                    <Box sx={{ textAlign: "center" }}>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={toggleMode}
                            sx={{ cursor: "pointer" }}
                        >
                            {isRegisterMode ? "I already have an account" : "I don't have an account"}
                        </Link>
                    </Box>
                </Box>
                {/* TODO: Display Login Error if it exists */}
                {loginError && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                        {loginError}
                    </Alert>
                )}
            </Box>
        </Container>
    );
}

export default LoginPage;
