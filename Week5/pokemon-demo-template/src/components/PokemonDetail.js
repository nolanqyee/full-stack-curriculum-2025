import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography, CircularProgress, Box, Chip } from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function PokemonDetail() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const { theme } = useContext(ThemeContext);

    function fetchPokemonDetail() {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => {
                setPokemon(response.data);
            })
            .catch((error) => {
                console.error("Error fetching Pokémon detail:", error);
            });
    }

    useEffect(() => {
        fetchPokemonDetail();
    }, []);

    if (!pokemon) {
        return <CircularProgress />;
    }

    const imageUrl = pokemon.sprites.other["showdown"].front_default;

    return (
        <Box>
            <Box>
                <img
                    src={imageUrl}
                    alt={name}
                    style={{
                        width: "100%",
                        maxWidth: "300px",
                        borderRadius: "8px",
                    }}
                />
            </Box>

            <Typography variant="h2" gutterBottom sx={{ marginTop: 2 }}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Typography>

            <Box>
              {pokemon.types.map((typeInfo) => (
                <Chip
                  key={typeInfo.type.name}
                  label={typeInfo.type.name.toUpperCase()}
                  sx={{
                    marginRight: 1,
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#555" : "#ddd",
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                  }}
                />
              ))}
            </Box>
        </Box>
    );
}

export default PokemonDetail;
