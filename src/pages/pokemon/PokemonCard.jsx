import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { stringToColor } from "../../../lib/avatarUtils";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import StatsPanel from "./StatsPanel";
import PokemonMoves from "./PokemonMoves";
import HealthBar from "./HealthBar";
import { Edit } from "@mui/icons-material";

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

  const [expanded, setExpanded] = useState(false);

  return (
    <Box className="pokemon-card">
      <Box className="pokemon-brief">
        <Avatar sx={{bgcolor:stringToColor(name)}} className="pokemon-img">{name[0]}</Avatar>
        <Box className="pokemon-brief-info">
          <Box className="name-level">
            <Box sx={{ display: "flex" }}>
              <Typography variant="h5">{name}</Typography>
              <IconButton sx={{ pl: 1 }} size="small">
                <Edit fontSize="small" />
              </IconButton>
            </Box>
            <Typography gutterBottom variant="h6">
              Lvl {level}
            </Typography>
          </Box>
          <Box>
            <HealthBar currentHp={currentHp} maxHp={maxHp} />
          </Box>
            
          {expanded && <Divider light />}
        </Box>
        <IconButton
              onClick={() => setExpanded(expanded ? false : true)}
              color="primary"
              aria-label="show more"
              sx={{width:"min-content", float:"right"}}
            >
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
      </Box>
      {expanded && (
        <Box className="pokemon-details">
          <StatsPanel stats={stats} />
          <Box className="pokemon-details-right">
            <PokemonMoves moves={moves} />
            <Typography variant="body2">Ability: {ability.name}</Typography>
            <Typography variant="body2">Nature: {nature}</Typography>
            <Typography gutterBottom variant="body2">
              {ability.description}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}
