/**
 * File: /src/components/AboutMe.tsx
 * Project: portfolio
 * Purpose: // TODO: Add the purpose of the file here.
 *
 * @author Myles Berueda
 * @date   Tuesday November 23rd 2021
 * -----
 * Modified: Tuesday November 23rd 2021 4:03:43 pm
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
import React from "react";
import { chakra } from "@chakra-ui/react";

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = ({ ...props }) => {
  return (
    <chakra.div
      id="about-me"
      data-scroll="about-me"
      display="flex"
      height="80vh"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection={["column", "row"]}
      backgroundSize="cover"
      backgroundColor="var(--color-light-dark)"
      backgroundPosition="bottom"
      color="#FFFFFF"
    >
      <chakra.div>
        <chakra.h1 fontFamily="Lato" fontSize="3rem" fontWeight="900">about me</chakra.h1>
        <chakra.p>This should be my whole about me thingy</chakra.p>
      </chakra.div>
      <chakra.div
        backgroundImage="guitar-dude.jpg"
        backgroundPosition="center"
        backgroundSize="cover"
        width="100%"
        boxSize={["300px"]}
        border="3px solid #FFFFFF"
        borderRadius="50%"
      />
    </chakra.div>
  );
};

export default AboutMe;
