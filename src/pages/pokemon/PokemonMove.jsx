import { Paper, styled, Button, Grid } from "@mui/material";
import { useState } from "react";
import MoveDescription from "./MoveDescription";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,

  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PokemonMove({ move }) {
  const [descriptionShown, setDescriptionShown] = useState(false);

  return (
    <Grid key={crypto.randomUUID()} item xs={6} className="pokemon-move">
      <Item sx={{display: "flex", alignItems:"center", minHeight: "100%"}}>
        {descriptionShown && (
          <MoveDescription
            open={descriptionShown}
            setOpen={setDescriptionShown}
            move={move}
          />
        )}
        <Button
          onClick={() => setDescriptionShown(true)}
          sx={{ width: "100%", minHeight: "100%"}}
          color={move.name ? "primary" : "success"}
          size="small"
          variant="text"
        >
          {move.name}
          {!move.name && "Learn"}
        </Button>
      </Item>
    </Grid>
  );
}
