import { Add, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";

function getProgress(current, max) {
  return (current / max) * 100;
}

function LinearProgressWithLabel({ current, max }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box className="health-bar" sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          sx={{ height: 10, borderRadius: 5, bgcolor: "#111" }}
          color={"success"}
          variant="determinate"
          value={getProgress(current, max)}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <IconButton color="error" size="small">
          <Remove fontSize="8px" />
        </IconButton>
        <Typography sx={{ fontSize:"12px" }} variant="body1">
          {current} / {max}
        </Typography>
        <IconButton color="success" size="small">
          <Add fontSize="8px" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default function HealthBar({ maxHp, currentHp }) {
  return (
    <Box className="pokemon-health" sx={{ width: "100%" }}>
      <LinearProgressWithLabel current={currentHp} max={maxHp} />
    </Box>
  );
}
