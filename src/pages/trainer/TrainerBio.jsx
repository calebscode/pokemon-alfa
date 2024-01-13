import { Container, Typography, Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function TrainerBio({ bio }) {
  return (
    <Container className="trainer-bio">
      <Box className="trainer-section-header">
        <Typography variant="h6">Biography</Typography>
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
      </Box>
      <Container>
        <Typography sx={{}} variant="body2">
          {bio}
        </Typography>
      </Container>
    </Container>
  );
}
