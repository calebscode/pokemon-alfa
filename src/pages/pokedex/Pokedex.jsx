import useFetch from "../../../lib/useFetch";
import { Container } from "@mui/material";
import DexEntryList from "./DexEntryList";

export default function Pokedex() {
  const url = "http://localhost:3000/users/1/"
  const { error, isPending, data } = useFetch(url)

  return (
    <Container className="pokedex">
      { error && <div className="error">Error: { error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <DexEntryList entries={data.trainerData.pokedex} /> }
    </Container>
  );
}
