import { useEffect, useState } from "react";
import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import CardPokemon from "./CardPokemon";
import usePokemon from "../hooks/usePokemon";

export default function ContainCardsPokemon() {
  const { data, dataPokemon } = usePokemon();

  useEffect(() => {
    // let dataPoke = [];
    // fetch("https://pokeapi.co/api/v2/pokemon")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     dataPoke = data.results.map((poke) => fetch(poke.url));
    //     Promise.all(dataPoke).then((pokemon) => {
    //       Promise.all(pokemon.map((poke) => poke.json())).then((data) => {
    //         setPokemons(data);
    //         console.log(data);
    //       });
    //     });
    //   });
    dataPokemon();
  }, []);

  return (
    <Box>
      <Center>
        <Grid m="2" templateColumns="repeat(3, 8fr)" gap={3}>
          {data.map((pokemon) => {
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
