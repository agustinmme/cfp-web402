import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Tooltip,Text
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
export default function CardCoursesCarousel(){
  return (
    <Tooltip label={`Ir a Asistente de Estudio Jurídico y Notarial`} openDelay={200}>
      <Box
        w="100%"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        cursor={"pointer"}
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Text
            px={3}
            w={{base:"270px",md:"320px"}}
            display="block"
            fontSize={{base:"lg",md:"lg"}}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            isTruncated
          >
             Asistente de Estudio Jurídico y Notarial
          </Text>
          <Flex alignItems="center" justifyContent="center">
          <MdLocationOn/>
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.700", "gray.200")}
            
          >
            
            Central
          </chakra.span>
          </Flex>
          
        </Box>
      </Box>
      </Tooltip>
  );
};

