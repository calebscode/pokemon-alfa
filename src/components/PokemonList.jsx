import PokemonCard from "./PokemonCard";

export default function PokemonList({ mons }) {
  return (
    <div className="pkmn-list">
      {mons.map((mon) => (
          <PokemonCard key={mon.name} mon={mon} />
        ))}
    </div>
  )
}