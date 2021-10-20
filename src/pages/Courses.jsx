import React,{useEffect} from "react";
import NavBar from "../components/Navbar/NavBar";
import {
  Box,
  Container,
  useColorModeValue,
  Stack,
  Heading,
  SimpleGrid,
  Flex,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Input,
} from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import CardCourses from "../components/Cards/CardCourses/CardCourses";
function Courses() {
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
          h={{ base: "125px", md: "350px" }}
          backgroundImage="url(https://images.unsplash.com/photo-1453733190371-0a9bedd82893?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80)"
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
            Nuestros cursos
          </Heading>
          <Box mx="auto">
            <SimpleGrid
              display={{ base: "initial", md: "grid" }}
              columns={{ md: 4 }}
              mb={14}
            >
              <GridItem mt={[5, null, 0]} colSpan={{ md: 1 }}>
                <Accordion defaultIndex={[0,1]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Categorías
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Button colorScheme="teal" size="xs">
                        Administracion
                      </Button>
                      <Button colorScheme="teal" variant={"ghost"} size="xs">
                        Carpinteria
                      </Button>
                      <Button colorScheme="teal" variant={"ghost"} size="xs">
                        Electricidad
                      </Button>
                      <Button colorScheme="teal" variant={"ghost"} size="xs">
                        Estetica
                      </Button>
                      <Button colorScheme="teal" variant={"ghost"} size="xs">
                        Gasista y Mantenimiento
                      </Button>
                      <Button colorScheme="teal" variant={"ghost"} size="xs">
                        Gastronomia
                      </Button>
                      <Button colorScheme="teal" variant={"ghost"} size="xs">
                        Idioma
                      </Button>
                      <Button colorScheme="teal" variant={"ghost"} size="xs">
                        Informatica
                      </Button>
                      <Button colorScheme="teal" variant={"ghost"} size="xs">
                        Mecanica
                      </Button>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Sedes
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Button colorScheme="teal" size="xs">
                        Central
                      </Button>
                      <Button colorScheme="teal" variant={"ghost"} size="xs">
                        Escuela media
                      </Button>
                      <Button colorScheme="teal" variant={"ghost"} size="xs">
                        S.T.M.B
                      </Button>
                      <Button colorScheme="teal" variant={"ghost"} size="xs">
                        Flial Lauri
                      </Button>
                      <Button colorScheme="teal" variant={"ghost"} size="xs">
                        C.I.C
                      </Button>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </GridItem>
              <GridItem  colSpan={{ base: 1, md: 3 }}>
              <Input ml={{md:3}} mt={{base:3}} placeholder="Tornero" />
                <SimpleGrid p={5} columns={{ md: 3 }} spacing={5}>
                  <CardCourses />
                  <CardCourses />
                  <CardCourses />
                  <CardCourses />
                  <CardCourses />
                  <CardCourses />
                  <CardCourses />
                  <CardCourses />
                  <CardCourses />
                </SimpleGrid>
              </GridItem>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

export default Courses;
