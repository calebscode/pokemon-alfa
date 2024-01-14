import { Paper, styled, Button, Grid } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PokemonMove({ move }) {
  return (
    <Grid key={move.name} item xs={6} className="pokemon-move">
        <Item>
      {move.name ? (
        <Button size="small" variant="text">{move.name}</Button>
      ) : (
          <Button sx={{color: "lightGreen"}} endIcon={<AddCircleIcon />} size="small" variant="text">
            Learn
          </Button>
      )}
        </Item>
    </Grid>
  );
}
