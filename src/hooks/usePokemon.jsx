import { useState } from "react";

export default function usePokemon() {
  const [poke, setPoke] = useState([]);

  async function detailPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/berry/${id}`)
      .then((response) => response.json())
      .then((data) => setPoke(data));
  }

  return {
    detailPokemon,
    poke,
  };
}
