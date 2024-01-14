import { Box, Button, Grid, Typography, Paper, styled, Divider } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PokemonMove from "./PokemonMove";


export default function PokemonMoves({ moves }) {
  return (
    <Box className="pokemon-moves">
    <Typography variant="body1">Moves</Typography>
      <Grid container spacing={1}>
        {moves.map((move) => (
          <PokemonMove key={move.name} move={move}/>
        ))}
      </Grid>
    </Box>
  );
}
