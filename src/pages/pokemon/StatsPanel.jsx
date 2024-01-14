import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material";


export default function StatsPanel({ stats }) {
  return (
    <Box className="stats-panel">
    <Typography variant="body1" component="h6">
      Stats
    </Typography>
    <Box>
      <Typography variant="body2">XP</Typography>
      <Typography variant="body2">{stats.xp}</Typography>
    </Box>

    <Box>
      <Typography variant="body2">Atk</Typography>
      <Typography variant="body2">{stats.atk}</Typography>
    </Box>

    <Box>
      <Typography variant="body2">Def</Typography>
      <Typography variant="body2">{stats.def}</Typography>
    </Box>

    <Box>
      <Typography variant="body2">Sp. Atk</Typography>
      <Typography variant="body2">{stats.spAtk}</Typography>
    </Box>

    <Box>
      <Typography variant="body2">Sp. Def</Typography>
      <Typography variant="body2">{stats.spAtk}</Typography>
    </Box>

    <Box>
      <Typography variant="body2">Speed</Typography>
      <Typography variant="body2">{stats.spAtk}</Typography>
    </Box>

    <Box>
      <Typography variant="body2">AC</Typography>
      <Typography variant="body2">{stats.spAtk}</Typography>
    </Box>

    <Box>
      <Typography variant="body2">Sp. AC</Typography>
      <Typography variant="body2">{stats.spAtk}</Typography>
    </Box>
  </Box>
  )
}
