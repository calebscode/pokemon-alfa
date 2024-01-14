import { Box, LinearProgress, Typography } from "@mui/material";

function getProgress(current, max) {
  return (current / max) * 100;
}

function LinearProgressWithLabel({ current, max }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box className="health-bar" sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          sx={{ height: 10, borderRadius: 5, bgcolor:"#111" }}
          color={"success"}
          variant="determinate"
          value={getProgress(current, max)}
        />
      </Box>
      <Box sx={{ minWidth: 60, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          {current} / {max}
        </Typography>
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
