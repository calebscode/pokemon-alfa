import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { Container, Typography } from "@mui/material";

export default function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/users/1/";
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setPokemonList(data.trainerData.pokemonList);
      });
  }, []);

  return (
    <Container>
        {pokemonList.map((mon) => (
          <PokemonCard key={mon.name} mon={mon} />
        ))}
    </Container>
  );
}
