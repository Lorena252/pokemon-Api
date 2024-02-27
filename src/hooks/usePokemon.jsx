import { useState } from "react";

export default function usePokemon() {
  const [data, setPokemons] = useState([]);

  let dataPoke = [];
  async function dataPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        dataPoke = data.results.map((poke) => fetch(poke.url));
        Promise.all(dataPoke).then((pokemon) => {
          Promise.all(pokemon.map((poke) => poke.json())).then((data) => {
            setPokemons(data);
            console.log(data);
          });
        });
      });
  }

  async function detailPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  }

  return {
    detailPokemon,
    dataPokemon,
    data
  };
}
