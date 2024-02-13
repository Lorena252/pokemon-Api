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
    <Card width="400px" height="400px" onClick={() => console.log(id)}>
      <CardBody>
        <Center>
          <Image src={image} borderRadius="lg" alt="pokemon" width="200px" />
        </Center>
        <Stack mt="6" spacing="3"></Stack>
      </CardBody>
      <Divider />
      <CardFooter bg="#B2F5EA">
        <Heading>{name}</Heading>
      </CardFooter>
    </Card>
  );
}
