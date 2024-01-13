import useFetch from "../../../lib/useFetch";
import { Container } from "@mui/material";
import ItemList from "./ItemList";

export default function Bag() {
  const url = "http://localhost:3000/users/1"
  const { error, isPending, data } = useFetch(url)

  return (
    <Container className="bag">
      { error && <div className="error">Error: { error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <ItemList items={data.trainerData.bag.items} /> }
    </Container>
  );
}
