import React from "react";
import {
    Image,
  } from "@chakra-ui/react";
const Logo = () => {
  return (
    <Image
      ml={{md:-3}}
      mt={{ md: -7 }}
      objectFit="cover"
      src={"https://i.imgur.com/SrTqWxV.png"}
      alt="Logo centro de formacion profesional"
    />
  );
};

export default Logo;
