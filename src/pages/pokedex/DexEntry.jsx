import { CatchingPokemonTwoTone } from "@mui/icons-material";
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Typography } from "@mui/material";

export default function DexEntry({ entry }) {
  const {
    name,
    isCaught
  } = entry;

  return (
    <Box className="dex-entry">
      <Typography variant="h6">{name}</Typography>
      {isCaught ? 
      <CatchingPokemonTwoTone className="caught-icon"/>
      :
      <CircleIcon/>}
    </Box>
  );
}
