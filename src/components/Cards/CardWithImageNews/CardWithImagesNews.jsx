import React from "react";
import {
  chakra,
  Box,
  Image,
  Link,
} from "@chakra-ui/react";

export default function CardWithImagesNews() {
  return (
    <Box
    mx="auto"
      rounded="lg"
      shadow="md"
      bg={"white"}
      maxW={{base:"xs",md:"2xl",lg:"md",xl:"2xl"}}
      overflow="hidden"
      display={{ base:"block", md: "block" }}
    >
      <Image
        display="inline"
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
        transform="scale(1.0)"
        overflow="hidden"
        transition="0.3s ease-in-out"
        _hover={{
          transform: "scale(1.05)",
        }}
      />

      <Box p={5}>
        <Box>
          <chakra.span
            fontSize="xs"
            textTransform="uppercase"
            fontWeight="500"
            color={"white"}
            bg="#54bcd9"
            p={2}
            borderRadius="20px"
            w="full"
          >
            21 SEP 2015
          </chakra.span>
          <Link
            display="block"
            color={"#3c3c3b"}
            fontWeight="bold"
            fontSize="2xl"
            my="auto"
            _hover={{ color: "#4f4f4e", textDecor: "underline" }}
            isTruncated
          >
            I Built A Successful Blog In One Year I Built A Successful Blog In
            One Year I Built A Successful Blog In One Year
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
