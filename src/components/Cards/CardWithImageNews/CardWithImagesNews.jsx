import React from "react";
import { Text, Link, Image, Flex, Button, Spacer, Box } from "@chakra-ui/react";
import { FaBeer } from "react-icons/fa";
export default function CardWithImagesNews() {
  return (
    <Flex w="full" overflow="hidden">
      <Flex pos="relative" h={{base:"24vh",md:"24vh",xl:"30vh"}} w="full">
        <Box flex="none" boxSize="full" shadow="md">
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
            p="8px 12px"
            pos="absolute"
            bottom="10"
            whiteSpace="nowrap"
          >
            Marketing
          </Text>
          <Link
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
            bottom="0"
            p="8px 12px"
            pos="absolute"
            bottom="0"
            whiteSpace="nowrap"

          >
            Finding customers for your new business
          </Link>
          <Image
            src={
              "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
            boxSize="full"
            backgroundSize="cover"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
