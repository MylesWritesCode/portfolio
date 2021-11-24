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
      <chakra.div display="flex"  flexWrap="wrap-reverse" justifyContent="space-evenly" maxWidth="768px">
        <chakra.div
          display="flex"
          flexDirection="column"
          alignSelf="flex-start"
          flexBasis={{base: "100%", sm: "100%", md: "50%"}}
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
            I do things and stuff with computers to make them go boom boom on
            the internet. Also, things and stuff are cool dontcha know. Wow this
            is a super long paragraph now and I need to figure out how to make
            it look nice. I think my best bet is to just add some flex basis to
            the div itself. Now that I've fixed the sizing, I wonder what
            happens when I just go ahead and add a bunch of other paragraphs to
            this div. I assume that the phrase 'about me' will eventually move
            up. This div does currently have a height of 80vh. I'm fairly
            certain that that's the minimum height I want on the div.
          </chakra.p>
        </chakra.div>
        <chakra.div
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexBasis={{base: "100%", sm: "100%", md: "50%"}}
        >
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
      </chakra.div>
    </chakra.div>
  );
};

export default AboutMe;
