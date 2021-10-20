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
import { MdNotListedLocation, MdPhoneInTalk } from "react-icons/md";
import Footer from "../components/Footer/Footer";
import imagebg from '../assets/sede-central.jpg'
function Contact() {
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
          backgroundImage="url(https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)"
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
            Contactanos
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
                  leftIcon={<MdPhoneInTalk />}
                >
                  0221 464 3212
                </Button>
                <Button
                  w={{ base: "full", sm: "auto" }}
                  size="lg"
                  colorScheme="gray"
                  variant="ghost"
                >
                    Facebook
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
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

export default Contact;
