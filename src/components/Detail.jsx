import { Center, Box, Text, Image, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";

export default function Detail() {
  const { detailPokemon, data } = usePokemon();
  let { id } = useParams();
  useEffect(() => {
    detailPokemon(id);
  }, []);

  return (
    <>
      {console.log(data)}
      <Box bgGradient="linear(to-r, gray.300, yellow.400, pink.200)">
        <Center>
          <Box bg="#E2E8F0" m="4">
            <Center>
              <Box
                m="1"
                w="430px"
                h="350px"
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bg="#F6E05E"
              >
                <Center>
                  <Box
                  border='5px inset'
                    bg="#FFFFF0"
                    w="350px"
                    h="330px"
                    m="2"
                    borderWidth="2px"
                    borderRadius="lg"
                  >                          
             <Text as="b" fontSize="xl" pl="6" >{data.name}</Text>              
                    <Center>
                      <Image
                    border='4px inset'
                     
                        src={data.sprites?.other.showdown.front_shiny}
                        alt="pokemon"
                      style={{ width: "150px", height:"150px" }}
                      />
                    </Center>
                    <Box ml="6" >
                      
                      <Text as="b">Types:</Text>
                      <Center>

                      <ul>
                        {data.types?.map((type) => (
                          <li  key={type.type.name}>
                            {type.type.name}
                          </li>
                        ))}
                      </ul>
                      </Center>
                      <Flex>
                         <Text as="b">Experience:</Text>
                    <Text ml="2"> {data.base_experience}</Text> 
                      </Flex>
                        
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
