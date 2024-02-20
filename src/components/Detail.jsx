import { Center, Box, Text, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";

export default function Detail() {
  const { detailPokemon, poke } = usePokemon();
  let { id } = useParams();
  useEffect(() => {
    detailPokemon(id);
  }, []);

  return (
    <>
      {console.log(poke)}
      <Box bg="#1A325D">
        <Center>
          <Box bg="#E2E8F0" m="4">
            <Center>
              <Box
                m="1"
                w="430px"
                h="530px"
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bg="#F6E05E"
              >
                <Center>
                  <Box
                    bg="#FFFFF0"
                    w="350px"
                    h="510px"
                    m="2"
                    borderWidth="2px"
                    borderRadius="lg"
                  >
                    <Center>
                      <Text as="em" fontSize="3xl">
                        {poke.name}
                      </Text>
                    </Center>

                    <Center>
                      <Image
                        src={poke.sprites?.other.home.front_default}
                        alt="pokemon"
                        style={{ width: "200px" }}
                      />
                    </Center>
                    <Box ml="6">
                      <Text as="b">Types:</Text>
                      <ul>
                        {poke.types?.map((type) => (
                          <li ml="4" key={type.type.name}>
                            {type.type.name}
                          </li>
                        ))}
                      </ul>
                    </Box>
                  </Box>
                </Center>
              </Box>
            </Center>
          </Box>
        </Center>
      </Box>
    </>
  );
}
