import React,{useEffect} from "react";
import NavBar from "../components/Navbar/NavBar";
import {
  Box,
  Container,
  useColorModeValue,
  Stack,
  Heading,
  Button,
  SimpleGrid,
  Flex,
  chakra,
} from "@chakra-ui/react";
import imagebg from '../assets/sede-central.jpg'
import Footer from "../components/Footer/Footer";
import { MdNotListedLocation, MdPhoneInTalk } from "react-icons/md";
function Campus() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
  }, [])
  return (
    <>
      <NavBar />
      <Box
        w="full"
        bg={useColorModeValue("#f5f5f5", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Box
          w="full"
          h={{ base: "200px", md: "350px" }}
          backgroundImage="url(https://images.unsplash.com/photo-1555371363-27a37f8e8c46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)"
          bgPos="center"
          bgSize="cover"
        >
          <Flex
            align="center"
            pos="relative"
            justify="center"
            boxSize="full"
            bg="blackAlpha.600"
          />
        </Box>
      </Box>
      <Box bg={"#f2f2f2"}>
        <Container as={Stack} maxW={"8xl"}>
          <Heading color="#3c3c3b" size="lg" my={5} borderBottom={"3px solid"}>
            Nuestras sedes
          </Heading>
          <Box px={8} py={5} mx="auto">
            <SimpleGrid
              alignItems="start"
              columns={{ base: 1, md: 2 }}
              mb={14}
              spacingY={{ base: 10, md: 32 }}
              spacingX={{ base: 10, md: 24 }}
            >
              <Box>
                <chakra.h2
                  mb={4}
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="600"
                  letterSpacing="tight"
                  textAlign={{ base: "center", md: "left" }}
                  color={useColorModeValue("gray.900", "gray.400")}
                  lineHeight={{ md: "shorter" }}
                >
                  Sede Central
                </chakra.h2>
                <chakra.p
                  mb={5}
                  textAlign={{ base: "center", sm: "left" }}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ md: "lg" }}
                >
                  Calle 12 y 170 S/N - Berisso - Buenos Aires
                </chakra.p>
                <Button
                  w={{ base: "full", sm: "auto" }}
                  size="lg"
                  colorScheme="gray"
                  variant="ghost"
                  leftIcon={<MdNotListedLocation />}
                >
                  Ver en el mapa
                </Button>
                <chakra.p
                  my={5}
                  textAlign={{ base: "center", sm: "left" }}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ md: "lg" }}
                >
                  Teléfono útil
                </chakra.p>
                <Button
                  w={{ base: "full", sm: "auto" }}
                  size="lg"
                  colorScheme="gray"
                  variant="ghost"
                  leftIcon={<MdPhoneInTalk />}
                >
                  0221 464 3212
                </Button>
              </Box>
              <Box
                rounded="20px"
                w="full"
                h="full"
                py={48}
                backgroundImage={imagebg}
                bgPos="center"
                bgSize="cover"
                transform="scale(1.0)"
                overflow="hidden"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
                cursor="pointer"
              ></Box>
            </SimpleGrid>
            <SimpleGrid
              alignItems="center"
              columns={{ base: 1, md: 2 }}
              flexDirection="column-reverse"
              mb={24}
              spacingY={{ base: 10, md: 32 }}
              spacingX={{ base: 10, md: 24 }}
            >
              <Box order={{ base: "none", md: 2 }}>
                <chakra.h2
                  mb={4}
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="600"
                  letterSpacing="tight"
                  textAlign={{ base: "center", md: "left" }}
                  color={useColorModeValue("gray.900", "gray.400")}
                  lineHeight={{ md: "shorter" }}
                >
                  Centro Integrador Comunitario
                </chakra.h2>
                <chakra.p
                  mb={5}
                  textAlign={{ base: "center", sm: "left" }}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ md: "lg" }}
                >
                  Calle 33 y 169 - Berisso - Buenos Aires
                </chakra.p>
                <Button
                  w={{ base: "full", sm: "auto" }}
                  size="lg"
                  colorScheme="gray"
                  variant="ghost"
                  leftIcon={<MdNotListedLocation />}
                >
                  Ver en el mapa
                </Button>
                <chakra.p
                  my={5}
                  textAlign={{ base: "center", sm: "left" }}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ md: "lg" }}
                >
                  Teléfono útil
                </chakra.p>
                <Button
                  w={{ base: "full", sm: "auto" }}
                  size="lg"
                  colorScheme="gray"
                  variant="ghost"
                  leftIcon={<MdPhoneInTalk />}
                >
                  0221 464 4775
                </Button>
              </Box>
              <Box
                rounded="20px"
                w="full"
                h="full"
                py={48}
                backgroundImage="url(https://scontent.flpg5-1.fna.fbcdn.net/v/t1.6435-9/169675378_105931521607496_7350947701313412573_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHUozc6l1mZOTacEJvb69fYOgww9KCPf5k6DDD0oI9_mc-cNwToQv6Lt7NdVLEAIrc&_nc_ohc=rl928Nai2x0AX_P5raA&_nc_ht=scontent.flpg5-1.fna&oh=73ec5a9fa4c322cb4a9158df1a8aca22&oe=61876E51)"
                bgPos="center"
                bgSize="cover"
                transform="scale(1.0)"
                overflow="hidden"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
                cursor="pointer"
              ></Box>
            </SimpleGrid>
            <SimpleGrid
              alignItems="start"
              columns={{ base: 1, md: 2 }}
              mb={14}
              spacingY={{ base: 10, md: 32 }}
              spacingX={{ base: 10, md: 24 }}
            >
              <Box>
                <chakra.h2
                  mb={4}
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="600"
                  letterSpacing="tight"
                  textAlign={{ base: "center", md: "left" }}
                  color={useColorModeValue("gray.900", "gray.400")}
                  lineHeight={{ md: "shorter" }}
                >
                  Escuela de Educación Secundaria Nº2 Perito Francisco. P.
                  Moreno
                </chakra.h2>
                <chakra.p
                  mb={5}
                  textAlign={{ base: "center", sm: "left" }}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ md: "lg" }}
                >
                  Av. Montevideo y 35 - Berisso - Buenos Aires
                </chakra.p>
                <Button
                  w={{ base: "full", sm: "auto" }}
                  size="lg"
                  colorScheme="gray"
                  variant="ghost"
                  leftIcon={<MdNotListedLocation />}
                >
                  Ver en el mapa
                </Button>
                <chakra.p
                  my={5}
                  textAlign={{ base: "center", sm: "left" }}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ md: "lg" }}
                >
                  Teléfono útil
                </chakra.p>
                <Button
                  w={{ base: "full", sm: "auto" }}
                  size="lg"
                  colorScheme="gray"
                  variant="ghost"
                  leftIcon={<MdPhoneInTalk />}
                >
                  0221 462 0221
                </Button>
              </Box>
              <Box
                rounded="20px"
                w="full"
                h="full"
                py={48}
                backgroundImage="url(https://e-basura.unlp.edu.ar/uploads/assets/2014_07_17_escuela_secundaria_n%C2%B02_de_berisso_recibio_la_donacion_de_computadoras_small.JPG)"
                bgPos="center"
                bgSize="cover"
                transform="scale(1.0)"
                overflow="hidden"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
                cursor="pointer"
              ></Box>
            </SimpleGrid>
            <SimpleGrid
              alignItems="center"
              columns={{ base: 1, md: 2 }}
              flexDirection="column-reverse"
              mb={24}
              spacingY={{ base: 10, md: 32 }}
              spacingX={{ base: 10, md: 24 }}
            >
              <Box order={{ base: "none", md: 2 }}>
                <chakra.h2
                  mb={4}
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="600"
                  letterSpacing="tight"
                  textAlign={{ base: "center", md: "left" }}
                  color={useColorModeValue("gray.900", "gray.400")}
                  lineHeight={{ md: "shorter" }}
                >
                  Sindicato de Trabajadores Municipales de Berisso
                </chakra.h2>
                <chakra.p
                  mb={5}
                  textAlign={{ base: "center", sm: "left" }}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ md: "lg" }}
                >
                  Calle 166 entre 12 y 13 N 1038 - Berisso - Buenos Aires
                </chakra.p>
                <Button
                  w={{ base: "full", sm: "auto" }}
                  size="lg"
                  colorScheme="gray"
                  variant="ghost"
                  leftIcon={<MdNotListedLocation />}
                >
                  Ver en el mapa
                </Button>
                <chakra.p
                  my={5}
                  textAlign={{ base: "center", sm: "left" }}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ md: "lg" }}
                >
                  Teléfono útil
                </chakra.p>
                <Button
                  w={{ base: "full", sm: "auto" }}
                  size="lg"
                  colorScheme="gray"
                  variant="ghost"
                  leftIcon={<MdPhoneInTalk />}
                >
                  0221 461-3614
                </Button>
              </Box>
              <Box
                rounded="20px"
                w="full"
                h="full"
                py={48}
                backgroundImage="url(https://infoberisso.com.ar/wp-content/uploads/2019/11/Obras-STMB.jpg)"
                bgPos="center"
                bgSize="cover"
                transform="scale(1.0)"
                overflow="hidden"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
                cursor="pointer"
              ></Box>
            </SimpleGrid>
            <SimpleGrid
              alignItems="start"
              columns={{ base: 1, md: 2 }}
              mb={14}
              spacingY={{ base: 10, md: 32 }}
              spacingX={{ base: 10, md: 24 }}
            >
              <Box>
                <chakra.h2
                  mb={4}
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="600"
                  letterSpacing="tight"
                  textAlign={{ base: "center", md: "left" }}
                  color={useColorModeValue("gray.900", "gray.400")}
                  lineHeight={{ md: "shorter" }}
                >
                  Filial Miguel A. Lauri
                </chakra.h2>
                <chakra.p
                  mb={5}
                  textAlign={{ base: "center", sm: "left" }}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ md: "lg" }}
                >
                  Calle 10 esq 165 - Berisso - Buenos Aires
                </chakra.p>
                <Button
                  w={{ base: "full", sm: "auto" }}
                  size="lg"
                  colorScheme="gray"
                  variant="ghost"
                  leftIcon={<MdNotListedLocation />}
                >
                  Ver en el mapa
                </Button>
                <chakra.p
                  my={5}
                  textAlign={{ base: "center", sm: "left" }}
                  color={useColorModeValue("gray.600", "gray.400")}
                  fontSize={{ md: "lg" }}
                >
                  Teléfono útil
                </chakra.p>
                <Button
                  w={{ base: "full", sm: "auto" }}
                  size="lg"
                  colorScheme="gray"
                  variant="ghost"
                  leftIcon={<MdPhoneInTalk />}
                >
                  0221 462 0221
                </Button>
              </Box>
              <Box
                rounded="20px"
                w="full"
                h="full"
                py={48}
                backgroundImage="url(https://i.imgur.com/yfhLsEA.png)"
                bgPos="center"
                bgSize="cover"
                transform="scale(1.0)"
                overflow="hidden"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
                cursor="pointer"
              ></Box>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

export default Campus;
