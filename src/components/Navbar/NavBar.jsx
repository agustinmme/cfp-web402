import React from "react";
import {
  chakra,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  CloseButton,
  Box,
  VStack,
  Button,
  Image,
  Center,
  Text,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { useViewportScroll } from "framer-motion";
import { AiOutlineMenu, AiFillHome, AiOutlineInbox } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function App() {
  const mobileNav = useDisclosure();

  const bg = "white";
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="md"
    >
      <CloseButton
        aria-label="Cerrar menu"
        zIndex="1"
        pos={"fixed"}
        top="2"
        right="5"
        onClick={mobileNav.onClose}
      />
      <VStack
        flexDirection="column"
        w={"100%"}
        bg={bg}
        spacing={3}
        rounded="sm"
      >
        <Button mt={5} w="full" variant="ghost" leftIcon={<AiFillHome />}>
          Institucion
        </Button>
        <Button w="full" variant="solid" leftIcon={<AiOutlineInbox />}>
          Cursos
        </Button>
        <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
          Galeria
        </Button>
        <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
          Contacto
        </Button>
        <Button
          fontSize="xs"
          ml={3}
          w={"100%"}
          colorScheme={"facebook"}
          leftIcon={<FaFacebook />}
        >
          <Center>
            <Text fontSize="sm">Facebook</Text>
          </Center>
        </Button>
      </VStack>
    </VStack>
  );

  return (
    <Box
      zIndex={1}
      pos="fixed"
      mt={{ md: y > height ? "0px" : "24px" }}
      transitionDuration=" 0.35s, 0.35s, 0.35s, 0s"
      w={"full"}
    >
      <chakra.header
        ref={ref}
        shadow={y > height ? "md" : undefined}
        transitionDelay="0s, 0s, 0s, 0s"
        transitionDuration=" 0.35s, 0.35s, 0.35s, 0s"
        transition-property="box-shadow, background-color, filter, border"
        transitionTimingFunction="linear, linear, linear, linear"
        bg={y > height ? bg : "none"}
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link to="/">
                <HStack>
                  <Image
                    display={{ base: "none", md: "flex" }}
                    p={3}
                    h={y > height ? "100px" : "120px"}
                    objectFit="cover"
                    src={
                      y > height
                        ? "https://i.imgur.com/y5iUS3B.png"
                        : "https://i.imgur.com/DCte3fC.png"
                    }
                    alt="Logo centro de formacion profesional"
                    transitionDelay="0s, 0s, 0s, 0s"
                    transitionDuration=" 0.35s, 0.35s, 0.35s, 0s"
                    transition-property="box-shadow, background-color, filter, border"
                    transitionTimingFunction="linear, linear, linear, linear"
                  />
                  <Image
                    display={{ base: "flex", md: "none" }}
                    p={3}
                    h={y > height ? "90px" : "75px"}
                    w={"200px"}
                    objectFit="cover"
                    src={ y > height
                      ? "https://i.imgur.com/y5iUS3B.png"
                      : "https://i.imgur.com/DCte3fC.png"}
                    alt="Logo centro de formacion profesional"
                    transitionDelay="0s, 0s, 0s, 0s"
                    transitionDuration=" 0.35s, 0.35s, 0.35s, 0s"
                    transition-property="box-shadow, background-color, filter, border"
                    transitionTimingFunction="linear, linear, linear, linear"
                  />
                </HStack>
              </Link>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <HStack spacing="3" display={{ base: "none", md: "flex" }}>
              <Link to="/institucion">
                <Button
                   w="full"
                   variant="ghost"
                   color={y > height ?"black":"white"}
                   _hover={{
                     color:y > height ?"cyan.500":"cyan.500",
                   }}
                >
                  Institucion
                </Button>
                </Link>
                <Link to="/cursos">
                <Button
                    w="full"
                    variant="ghost"
                    color={y > height ?"black":"white"}
                    _hover={{
                      color:y > height ?"cyan.500":"cyan.500",
                    }}
                >
                  Cursos
                </Button>
                </Link>
                <Link to="/galeria">
                <Button
                    w="full"
                    variant="ghost"
                    color={y > height ?"black":"white"}
                    _hover={{
                      color:y > height ?"cyan.500":"cyan.500",
                    }}
                >
                  Galeria
                </Button>
                </Link>
                <Link to="/contacto">
                <Button
                     w="full"
                     variant="ghost"
                     color={y > height ?"black":"white"}
                     _hover={{
                       color:y > height ?"cyan.500":"cyan.500",
                     }}
                >
                  Contacto
                </Button>
                </Link>
              </HStack>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={y > height ?"black":"white"}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <Button
                fontSize="xs"
                w={"12%"}
                ml={3}
                colorScheme={"facebook"}
                display={{ base: "none", md: "flex" }}
              >
                <Center>
                  <Text fontSize="sm">Facebook</Text>
                </Center>
              </Button>
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </Box>
  );
}
