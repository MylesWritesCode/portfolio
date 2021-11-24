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
      padding="5rem 3rem"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      backgroundSize="cover"
      backgroundColor="var(--color-light-dark)"
      backgroundPosition="bottom"
      color="#FFFFFF"
    >
      <chakra.div
        display="flex"
        width="100%"
        flexWrap="wrap-reverse"
        justifyContent="space-evenly"
        // maxWidth="768px"
        maxWidth="1080"
      >
        <chakra.div
          display="flex"
          flexDirection="column"
          alignSelf="flex-start"
          flexBasis={{ base: "100%", sm: "100%", md: "50%" }}
        >
          <chakra.h1 fontFamily="Lato" fontSize="60px" fontWeight="900">
            about me
          </chakra.h1>
          <chakra.p
            flex="0 0 50%"
            fontFamily="Lato"
            fontSize="16px"
            fontWeight="400"
            text-indent="2em"
          >
            Why hello there 👋 I'm Myles - a dev, tutor, and mentor - helping
            dozens of new devs make the transition into tech. I made my
            transition to development in 2016, working with different languages,
            frameworks, and libraries throughout the years. Wanting a formal
            education, I completed my CS degree remotely
          </chakra.p>
        </chakra.div>
        <chakra.div
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexBasis={{ base: "100%", sm: "100%", md: "50%" }}
        >
          <chakra.div
            backgroundImage="guitar-dude.jpg"
            backgroundPosition="top"
            backgroundSize="cover"
            width="100%"
            boxSize={["300px"]}
            border="3px solid #FFFFFF"
            borderRadius="50%"
          />
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
};

export default AboutMe;
