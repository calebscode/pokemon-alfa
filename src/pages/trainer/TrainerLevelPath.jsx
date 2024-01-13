import { Box, Container, Typography, Button } from "@mui/material";

export default function TrainerLevelPath({ levels }) {
  return (
    <Container className="trainer-levels">
      <Box className="trainer-section-header">
        <Typography variant="h6">Level Path</Typography>
        <Button size="small" variant="contained">
          Level Up
        </Button>
      </Box>
      <Container>
        <Typography variant="body1">Level 2</Typography>
        <Typography variant="body2">Level text goes here!</Typography>
        <Typography variant="body1">Level 4</Typography>
        <Typography variant="body2">Level text goes here!</Typography>
        <Typography variant="body1">Level 8</Typography>
        <Typography variant="body2">Level text goes here!</Typography>
      </Container>
    </Container>
  )
}
