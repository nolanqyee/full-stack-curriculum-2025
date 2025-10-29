import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  function fetchPokemon() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1025")
      .then((response) => {
        setPokemon(response.data.results);})
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
      });
  }

  useEffect(() => {
    fetchPokemon();
  }, [])

  return (
    <Grid container justifyContent="center">
        {pokemon.map((p, index) =>
          <PokemonCard pokemon={p} index={index + 1} />
        )}
    </Grid>
  );
}

export default PokemonList;