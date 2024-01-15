import {
  Dialog,
  DialogTitle,
  Typography,
  Container,
  IconButton,
  Box,
} from "@mui/material";
import { Edit } from "@mui/icons-material";

export default function MoveDescription({ move, open, setOpen }) {
  return (
    <Dialog onClose={() => setOpen(false)} open={open}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}>
        <DialogTitle>{move.name}</DialogTitle>
        <IconButton sx={{ mr: "1rem", height:'40px' }}>
          <Edit />
        </IconButton>
      </Box>
      <Container>
        <Typography sx={{ mb: "1rem" }} variant="body1">
          {move.description}
        </Typography>
      </Container>
    </Dialog>
  );
}
