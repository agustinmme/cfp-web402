import React,{useEffect} from "react";
import {
  Text,
  Box,
  Container,
  useColorModeValue,
  Stack,
  Heading,
  Center,
  Button,
  SimpleGrid,Flex
} from "@chakra-ui/react";
import { MdNotListedLocation, MdPhoneInTalk, MdHelp } from "react-icons/md";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import CardWithImagesNews from "../components/Cards/CardWithImageNews/CardWithImagesNews";
import CardText from "../components/Cards/CardTextNews/CardTextNews";
import CardCoursesCarousel from "../components/Cards/CardCourses/CardCourses";
import imagebg from '../assets/sede-central.jpg'

function App() {
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
        bg={useColorModeValue("#f5f5f5", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Box
          w="full"
          h={{base:"40vh",md:"40vh",lg:"45vh",xl:"70vh","2xl":"75vh"}}
          backgroundImage={imagebg}
          bgPos="center"
          bgSize="cover"
        ><Flex
        align="center"
        pos="relative"
        justify="center"
        boxSize="full"
        bg="blackAlpha.600"
      ></Flex></Box>
      </Box>
      <Box pb={10} bg={"#f2f2f2"}>
        <Container as={Stack} maxW={"8xl"}>
          <Heading color="#3c3c3b" size="lg" my={5} borderBottom={"3px solid"}>
            NOTICIAS
          </Heading>

          <Stack direction={["column", "column", "column", "row"]}>
            <CardWithImagesNews />
            <Stack spacing={{base:2,md:4}} direction={"column"}>
              <CardText />
              <CardText />
              <CardText />
              <Button h={14} w={"full"} colorScheme="teal" variant={"outline"}>
                <Center>
                  <Text>Ver mas noticas</Text>
                </Center>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box bgGradient="linear(to-r, #54bcd9, #99d1c4)">
        <Container as={Stack} maxW={"8xl"}>
          <Text
            mt={3}
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={{ base: "3xl", md: "4xl" }}
            textAlign="center"
          >
            ¡Nuestros cursos!
          </Text>
          <Stack spacing={10} p={5}>
            <Stack direction={["column", "column", "column", "row"]}>
              <CardCoursesCarousel />
              <CardCoursesCarousel />
              <CardCoursesCarousel />
            </Stack>
            <Center>
              <Button w={"sm"} variant={"outline"}>
                <Center>
                  <Text>Ver todos</Text>
                </Center>
              </Button>
            </Center>
          </Stack>
        </Container>
      </Box>

      <Box bg={"#ebebeb"}>
        <Container spacing={1} as={Stack} maxW={"8xl"} px={{ md: 64 }}>
          <SimpleGrid p={10} maxW={"8xl"} columns={{ base: 1, md: 3 }}>
            <Link to="/sedes">
            <Stack
              transitionDelay="0s, 0s, 0s, 0s"
              transitionDuration=" 0.35s, 0.35s, 0.35s, 0s"
              transition-property="box-shadow, background-color, filter, border"
              transitionTimingFunction="linear, linear, linear, linear"
              color="#3c3c3b"
              _hover={{ color: "#439cb5" }}
              cursor="pointer"
              alignItems="center"
              justifyContent="center"
            >
              <MdNotListedLocation size="5rem" />
              <Heading>Encontranos</Heading>
            </Stack>
            </Link>
            <Stack
              transitionDelay="0s, 0s, 0s, 0s"
              transitionDuration=" 0.35s, 0.35s, 0.35s, 0s"
              transition-property="box-shadow, background-color, filter, border"
              transitionTimingFunction="linear, linear, linear, linear"
              color="#3c3c3b"
              _hover={{ color: "#439cb5" }}
              alignItems="center"
              cursor="pointer"
              justifyContent="center"
            >
              <MdPhoneInTalk size="5rem" />
              <Heading>Contactanos</Heading>
            </Stack>
            <Link to="/faq">
            <Stack
              transitionDelay="0s, 0s, 0s, 0s"
              transitionDuration=" 0.35s, 0.35s, 0.35s, 0s"
              transition-property="box-shadow, background-color, filter, border"
              transitionTimingFunction="linear, linear, linear, linear"
              color="#3c3c3b"
              _hover={{ color: "#439cb5" }}
              cursor="pointer"
              alignItems="center"
              justifyContent="center"
            >
              <MdHelp size="5rem" />
              <Heading>Te ayudamos</Heading>
            </Stack>
            </Link>
          </SimpleGrid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default App;
