import React from "react";
import { Text, Box, Image, Flex } from "@chakra-ui/react";

export default function CardWithImagesNews() {
  return (
    <Flex w="100%" overflow="hidden">
      <Flex pos="relative" h="200px" w="full">
        <Box flex="none" boxSize="full" shadow="md">
          <Text
            color="white"
            fontSize="lg"
            p="8px 12px"
            pos="absolute"
            bottom="0"
            w={"2xl"}
            isTruncated
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            porro saepe rerum totam? Suscipit numquam aspernatur, ex distinctio
            soluta vel corporis praesentium voluptatum repellat natus eligendi
            animi, itaque repellendus accusantium? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Officiis porro saepe rerum totam?
            Suscipit numquam aspernatur, ex distinctio soluta vel corporis
            praesentium voluptatum repellat natus eligendi animi, itaque
            repellendus accusantium? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Officiis porro saepe rerum totam? Suscipit numquam
            aspernatur, ex distinctio soluta vel corporis praesentium voluptatum
            repellat natus eligendi animi, itaque repellendus accusantium? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Officiis porro
            saepe rerum totam? Suscipit numquam aspernatur, ex distinctio soluta
            vel corporis praesentium voluptatum repellat natus eligendi animi,
            itaque repellendus accusantium? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Officiis porro saepe rerum totam?
            Suscipit numquam aspernatur, ex distinctio soluta vel corporis
            praesentium voluptatum repellat natus eligendi animi, itaque
            repellendus accusantium
          </Text>
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
