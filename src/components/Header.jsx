import { Center, Box, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box bg="black" boxShadow="2xl" mb="5" h="110px">
      <Center>
        <Heading
          p="4px"
          as="i"
          fontSize="6xl"
          color="#FAF040"
          fontWeight="extrabold"
          textShadow="4px 4px #3182CE"
          m="2"
        >
          Pokémon
        </Heading>
      </Center>
    </Box>
  );
}
