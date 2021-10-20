import React from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Divider,
  Image,
  Center,
  Button,
} from "@chakra-ui/react";
import ListHeader from './ListHeader'
import Logo from './Logo'
import { FaPhoneAlt, FaFacebook } from "react-icons/fa";




export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={useColorModeValue("#373737", "#3c3c3b")}
      color={useColorModeValue("white", "gray.200")}
      borderTop="6px solid"
    >
      <Container spacing={1} as={Stack} maxW={"8xl"} px={{ md: 64 }}>
          <SimpleGrid p={10} maxW={"8xl"} columns={{ base: 1, md: 3 }}>
          <Box>
            <Logo />
            <Button
              leftIcon={<FaPhoneAlt />}
              color="#white"
              variant="ghost"
              iconSpacing={7}
              size={"lg"}
              w={"100%"}
              _hover={{
                bg: "none",
                color: "#54bcd9",
              }}
            >
              0221 461 3712
            </Button>
            <Button
              mt={3}
              ml={6}
              w={"80%"}
              colorScheme={"facebook"}
              leftIcon={<FaFacebook />}
            >
              <Center>
                <Text>Facebook</Text>
              </Center>
            </Button>
          </Box>
          <Stack mt={{base:"5"}} borderLeft={{md:"2px solid #696969"}}  alignItems="center" justifyContent="center" alignContent="center" >
            <ListHeader>LINKS</ListHeader>
            <Link href={"#"}>Cursos</Link>
            <Link href={"#"}>Acerca del Centro</Link>
            <Link href={"#"}>Galeria</Link>
            <Link href={"#"}>Contacto</Link>
            <Link href={"#"}>Ayuda y guías</Link>
          </Stack>
          <Stack mt={{base:"5"}}  borderLeft={{md:"2px solid #696969"}}  alignItems="center" alignContent="center"  >
              <ListHeader>Acreditador por</ListHeader>
            <Image
              mt={10}
              p={3}
              ml={{ md: -24 }}
              objectFit="cover"
              src={"https://i.imgur.com/Fo5FI0I.png"}
              alt="Logo centro de formacion profesional"
            />
          </Stack>
        </SimpleGrid>
      </Container>
      <Text textAlign="center">© 2021 - Centro de formacion profesional 402 - Sede central: Calle 12 y 170 S/N Berisso, Buenos Aires, Argentina.</Text>
    </Box>
  );
}
