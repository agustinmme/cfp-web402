import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  Container,
  useColorModeValue,
  Stack,
  Heading,
  Center,
  Button,
  SimpleGrid,
  Flex,
  Image,
  Grid,
  Icon,
  Spacer,
  GridItem,
} from "@chakra-ui/react";
import { FaBeer } from "react-icons/fa";
import { MdNotListedLocation, MdPhoneInTalk, MdHelp } from "react-icons/md";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import CardWithImagesNews from "../components/Cards/CardWithImageNews/CardWithImagesNews";
import CardText from "../components/Cards/CardTextNews/CardTextNews";
import CardCoursesCarousel from "../components/Cards/CardCourses/CardCourses";
import imagebg from "../assets/sede-central.jpg";
import googlesheets from "../services/googlesheets";

function App() {
  const [news, setNews] = useState([]);
const [loaded, setLoaded] = useState(false)
  useEffect(async () => {

    googlesheets.noticias().then((resolve)=>{
      setNews(resolve.reverse());
      setLoaded(true);
    })
    
      
    console.log(news)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <NavBar />
      <Box
        bg={useColorModeValue("#f5f5f5", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Box
          w="full"
          h={{
            base: "40vh",
            md: "40vh",
            lg: "45vh",
            xl: "70vh",
            "2xl": "75vh",
          }}
          backgroundImage={imagebg}
          bgPos="center"
          bgSize="cover"
        >
          <Flex
            align="center"
            pos="relative"
            justify="center"
            boxSize="full"
            bg="blackAlpha.400"
          ></Flex>
        </Box>
      </Box>
      <Box pb={10} bg={"#f2f2f2"}>
        <Container as={Stack} maxW={"8xl"}>
          <Heading color="#3c3c3b" size="lg" my={5} borderBottom={"3px solid"}>
            NOTICIAS
          </Heading>

          <Grid
            h="50vh"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={1}
          >
            <GridItem
              rowSpan={2}
              colSpan={2}
              borderRadius="15px"
              backgroundImage={
                "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              boxSize="full"
              backgroundSize="cover"
              cursor="pointer"
            >
              <Box
                w="100%"
                h="100%"
                borderRadius="15px"
                bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                position="relative"
              >
                <Text
                color="white"
                  pos="absolute"
                  bottom="5"
                  left="5"
                  fontSize="sm"
                  fontWeight="normal"
                  w={{ lg: "92%" }}
                >
                  {loaded?news[0].descripcion:""}
                </Text>
              </Box>
            </GridItem>
            <GridItem
              colSpan={1}
              borderRadius="15px"
              backgroundImage={
                "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              boxSize="full"
              backgroundSize="cover"
              cursor="pointer"
            >
              <Box
                w="100%"
                h="100%"
                borderRadius="15px"
                bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                position="relative"
              >
                <Text
                color="white"
                  pos="absolute"
                  bottom="5"
                  left="5"
                  fontSize="sm"
                  fontWeight="normal"
                  w={{ lg: "92%" }}
                >
                  {loaded?news[1].descripcion:""}
                </Text>
              </Box>
            </GridItem>
            <GridItem
              colSpan={2}
              borderRadius="15px"
              backgroundImage={
                "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              boxSize="full"
              backgroundSize="cover"
              cursor="pointer"
            >
              <Box
                w="100%"
                h="100%"
                borderRadius="15px"
                bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                position="relative"
              >
                <Text
                color="white"
                  pos="absolute"
                  bottom="5"
                  left="5"
                  fontSize="sm"
                  fontWeight="normal"
                  w={{ lg: "92%" }}
                >
                  {loaded?news[2].descripcion:""}
                </Text>
              </Box>
            </GridItem>
            <GridItem
              colSpan={2}
              borderRadius="15px"
              backgroundImage={
                "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              boxSize="full"
              backgroundSize="cover"
              cursor="pointer"
            >
              <Box
                w="100%"
                h="100%"
                borderRadius="15px"
                bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                position="relative"
              >
                <Text
                color="white"
                  pos="absolute"
                  bottom="5"
                  left="5"
                  fontSize="sm"
                  fontWeight="normal"
                  w={{ lg: "92%" }}
                >
                  {loaded?news[3].descripcion:""}
                </Text>
              </Box>
            </GridItem>
            <GridItem
              colSpan={1}
              borderRadius="15px"
              backgroundImage={
                "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              boxSize="full"
              backgroundSize="cover"
              cursor="pointer"
            >
              <Box
                w="100%"
                h="100%"
                borderRadius="15px"
                bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                position="relative"
              >
                <Text
                color="white"
                  pos="absolute"
                  bottom="5"
                  left="5"
                  fontSize="sm"
                  fontWeight="normal"
                  w={{ lg: "92%" }}
                >
                  {loaded?news[4].descripcion:""}
                </Text>
              </Box>
            </GridItem>
          </Grid>
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
