import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { Container } from "@mui/material";
import useFetch from "../../lib/useFetch";
import PokemonList from "../components/PokemonList";

export default function Pokemon() {
  const url = "http://localhost:3000/users/1/"
  const { error, isPending, data } = useFetch(url)

  return (
    <Container>
      { error && <div className="error">{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <PokemonList mons={data.trainerData.pokemonList} /> }
    </Container>
  );
}
