import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";

function PokemonCard(props) {
  const pokemonName = props.pokemon.name;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`;

  return (
    <Card sx={{ margin: 1 }}>
      <CardActionArea component={Link} to={`/${pokemonName}`}> {/* Link to the Pokemon detail page */}
        <CardMedia component="img" height="140" image={imageUrl} alt={pokemonName} />
          <CardContent>
            <Typography variant="h6">
              {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)} {/* Capitalizes the first letter */}
            </Typography>
          </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokemonCard;