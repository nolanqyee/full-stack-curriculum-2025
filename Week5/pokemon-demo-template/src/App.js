import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "./context/ThemeContext";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { WbSunny, NightsStay } from "@mui/icons-material";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

function App() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{
                          textDecoration: "none",
                          color: "inherit",
                          margin: "0px"
                        }}>Pokédex App</Link>
                    </Typography>

                    <IconButton color="inherit" onClick={toggleTheme}>
                        {theme.palette.mode === "dark" ? <WbSunny /> : <NightsStay />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/" element={<PokemonList />} />
                <Route path="/:name" element={<PokemonDetail />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
