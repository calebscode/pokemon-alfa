import { Box, Typography } from "@mui/material";

export default function PokemonCard({ mon }) {
  const {
    name,
    nature,
    currentHp,
    maxHp,
    level,
    ability,
    stats,
    types,
    moves,
  } = mon;

  return (
    <Box className="pkmn-card">
    <Box sx={{display: "flex", justifyContent: "space-between"}}>
      <Typography variant="h4">{name}</Typography>
      <Typography gutterBottom variant="h6">
        Lvl {level}
      </Typography>
    </Box>
      <Typography variant="body1">
        HP: {currentHp}/{maxHp}
      </Typography>
      <Typography variant="body1">Nature: {nature}</Typography>
      <Typography variant="body1">Ability: {ability.name}</Typography>
      <Typography gutterBottom variant="body1">
        {ability.description}
      </Typography>
      <br></br>
    </Box>
  );
}
