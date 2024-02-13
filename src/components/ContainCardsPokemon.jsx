import { useEffect, useState } from "react";
import { Box,  Center, Grid, GridItem } from "@chakra-ui/react";
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
      <Center>
        <Grid m="2" templateColumns="repeat(3, 8fr)" gap={3}>
          {pokemons.map((pokemon) => {
            return (
              <GridItem key={pokemon.id}>
                <CardPokemon
                  id={pokemon.id}
                  key={pokemon.name}
                  name={pokemon.name}
                  image={pokemon.sprites.front_default}
                />
              </GridItem>
            );
          })}
        </Grid>
      </Center>
    </Box>
  );
}
