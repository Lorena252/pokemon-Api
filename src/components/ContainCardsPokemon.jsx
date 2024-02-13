import { useEffect, useState } from "react";
import { Flex, Box, Wrap ,Center} from "@chakra-ui/react";
import CardPokemon from "./CardPokemon";

export default function ContainCardsPokemon() {
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    let dataPoke = [];
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
  }, []);

  return (
    <Box>

      <Flex>
        <Wrap>
         
          {pokemons.map((pokemon) => {
            return (
              <CardPokemon
                id={pokemon.id}
                key={pokemon.name}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                
              />
            );
          })}
          
        </Wrap>
      </Flex>

    </Box>
  );
}
