import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

export default function CardTextNews() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
        <Box
          w="100%"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          cursor={"pointer"}
          onClick={onOpen}
        >
          <Box textAlign="center">
            <Flex
              fontSize={{ base: "lg", md: "2xl" }}
              alignItems="center"
              justifyContent="center"
            >
              <Box
                bgGradient="linear(to-l, #54bcd9, #99d1c4)"
                fontWeight="bold"
                color="white"
                p={5}
              >
                12/10
              </Box>
              <Text
                px={5}
                w={{base:"270px",md:"2xl",lg:"lg"}}
                display="block"
                fontSize={{ base: "lg", md: "2xl" }}
                color={useColorModeValue("gray.800", "white")}
                fontWeight="bold"
                textAlign="left"
                isTruncated
              >
                Asistente de Estudio Jurídico y NotarialAsistente de Estudio
                Jurídico y NotarialAsistente de Estudio Jurídico y Notarial
              </Text>
            </Flex>
          </Box>
        </Box>
      <Modal onClose={onClose} isOpen={isOpen} size={"xl"} scrollBehavior={"inside"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader overflow='hidden' fontWeight="700" color="white"  bgGradient="linear(to-r, #54bcd9, #99d1c4)"> NOTICIAS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            porro saepe rerum totam? Suscipit numquam aspernatur, ex distinctio
            soluta vel corporis praesentium voluptatum repellat natus eligendi
            animi, itaque repellendus accusantium?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            porro saepe rerum totam? Suscipit numquam aspernatur, ex distinctio
            soluta vel corporis praesentium voluptatum repellat natus eligendi
            animi, itaque repellendus accusantium?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            porro saepe rerum totam? Suscipit numquam aspernatur, ex distinctio
            soluta vel corporis praesentium voluptatum repellat natus eligendi
            animi, itaque repellendus accusantium?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            porro saepe rerum totam? Suscipit numquam aspernatur, ex distinctio
            soluta vel corporis praesentium voluptatum repellat natus eligendi
            animi, itaque repellendus accusantium?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            porro saepe rerum totam? Suscipit numquam aspernatur, ex distinctio
            soluta vel corporis praesentium voluptatum repellat natus eligendi
            animi, itaque repellendus accusantium?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            porro saepe rerum totam? Suscipit numquam aspernatur, ex distinctio
            soluta vel corporis praesentium voluptatum repellat natus eligendi
            animi, itaque repellendus accusantium?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            porro saepe rerum totam? Suscipit numquam aspernatur, ex distinctio
            soluta vel corporis praesentium voluptatum repellat natus eligendi
            animi, itaque repellendus accusantium?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            porro saepe rerum totam? Suscipit numquam aspernatur, ex distinctio
            soluta vel corporis praesentium voluptatum repellat natus eligendi
            animi, itaque repellendus accusantium?
          </ModalBody>
          <ModalFooter overflow='hidden' fontWeight="700" bgGradient="linear(to-l, #54bcd9, #99d1c4)">
            <Button variant="ghost" colorScheme="white" onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
