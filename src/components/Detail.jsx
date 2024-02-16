import {
  Center,
  Box,
  Text
} from "@chakra-ui/react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
    const [poke, setPoke] = useState([]);

    let {id} = useParams()

useEffect(() =>{
    fetch(`https://pokeapi.co/api/v2/berry/${id}`)
    .then((response) => response.json())
    .then((data) => setPoke(data));


}, [])

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
