import useFetch from "../../../lib/useFetch";
import { Box, Button, Container, Typography } from "@mui/material";
import ItemList from "./ItemList";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function Bag() {
  const url = "http://localhost:3000/users/1";
  const { error, isPending, data } = useFetch(url);

  return (
    <Container className="bag">
      {error && <div className="error">Error: {error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <>
          <Container className="bag-header" sx={{mt:"0.5rem", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <Box className="bag-money" sx={{display:"flex", alignItems:"center", }}>
            <MonetizationOnIcon sx={{mr:"0.25rem"}}/>
            <Typography variant="h6">{data.trainerData.bag.money}</Typography>
          </Box>
          <Button size="small" variant="contained" color="success">Add</Button>
          </Container>
          <ItemList items={data.trainerData.bag.items} />
        </>
      )}
    </Container>
  );
}
