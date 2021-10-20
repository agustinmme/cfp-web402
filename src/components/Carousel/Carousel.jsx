import React, { useEffect, useState } from "react";
import { Box, Flex, useColorModeValue, Image } from "@chakra-ui/react";

export default function Carousel(){
  const slides = [
    {
      img:
        "https://i.imgur.com/pLvenw3.jpg?1",
    },
    {
      img:
        "https://i.imgur.com/11vlqRc.jpg",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, []);

  return (
    <Flex
      w="full"
      mt={24}
      bg={useColorModeValue("#ebebeb", "gray.600")}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden">
        <Flex h={{base:"400px",md:"600px"}} w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
              <Image src={slide.img} boxSize="full" objectFit="cover"/>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
