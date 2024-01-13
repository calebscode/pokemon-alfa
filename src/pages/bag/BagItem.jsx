import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function BagItem({ item }) {
  const {
    name,
    quantity
  } = item;

  return (
    <Box className="bag-item">
      <Typography variant="h6">{name}</Typography>
      <Box className="item-num">
        <IconButton><RemoveIcon sx={{color: "red"}} fontSize="medium" /></IconButton>
        <Typography variant="h6">{quantity}</Typography>
        <IconButton><AddIcon sx={{color: "lightGreen"}} fontSize="medium" /></IconButton>
      </Box>
    </Box>
  );
}
