import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import BagItem from "./BagItem";

export default function ItemList({ items }) {
  return (

    <div className="item-list">
    <Container sx={{display:"flex", justifyContent:"space-between"}}>
      <Typography variant="h6">Item</Typography>
      <Typography variant="h6">Amount</Typography>
    </Container>
    <Divider/>
    <Container className="items">
      {items.map((item) => (
          <BagItem key={item.name} item={item} />
        ))}
    </Container>
    </div>
  )
}