import { Center, Box, Text } from "@chakra-ui/react";
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
                    <Text>{poke.name}</Text>
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
