import useFetch from "../../../lib/useFetch";
import { Container } from "@mui/material";
import PokemonList from "./PokemonList";

export default function Pokemon() {
  const url = "http://localhost:3000/users/1/"
  const { error, isPending, data } = useFetch(url)

  return (
    <Container className="pokemon">
      { error && <div className="error">Error: { error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <PokemonList mons={data.trainerData.pokemonList} /> }
    </Container>
  );
}
