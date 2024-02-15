import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function CardPokemon({ name, image, id }) {
  const navigate = useNavigate();
  return (
    <Card
      width="400px"
      height="400px"
      onClick={() => navigate(`/detail/${id}`)}
      bgSize="cover"
      bgPosition="center"
      sx={{
        backgroundImage: `https://previews.123rf.com/images/artishokcs/artishokcs1408/artishokcs140800087/30644869-resumen-fondo-gris-geom%C3%A9trico.jpg`,
      }}
    >
      <CardBody>
        <Center mt="4">
          <Image src={image} borderRadius="lg" alt="pokemon" width="200px" />
        </Center>
        <Stack mt="6" spacing="3"></Stack>
      </CardBody>
      <Divider />
      <CardFooter bg="#B2F5EA">
        <Center>
          <Heading>{name}</Heading>
        </Center>
      </CardFooter>
    </Card>
  );
}
