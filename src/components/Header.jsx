import { Text, Center, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      // sx={{
      //   backgroundImage: `url(https://www.pixelstalk.net/wp-content/uploads/images6/Pokeball-HD-Wallpaper-Free-download.jpg)`,
      //   backgrounPosition: "center",
      //   backgroundSize: "cover",
      //      h:"300px",
         
      // }}
    >
      <Center>
        <Text
        p="4px"
          as="i"
          fontSize="6xl"
          color="#FAF040"
          fontWeight="extrabold"
          textShadow="4px 4px #3182CE"
          m="2"
        >
          Pokémon
        </Text>
      </Center>
    </Box>
  );
}
