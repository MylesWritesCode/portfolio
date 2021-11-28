/**
 * File: /src/components/AboutMe.tsx
 * Project: portfolio
 * Purpose: This will be shown in index.tsx and will have information about me.
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
import { chakra, Icon, extendTheme } from "@chakra-ui/react";
import {} from "react-icons/fc";
import { FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import {
  SiApollographql,
  SiChakraui,
  SiExpress,
  SiGraphql,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

interface AboutMeProps {}

const List = chakra(chakra.li, {
  baseStyle: {
    display: "flex",
    margin: "0.5rem 0rem",
    alignItems: "center",
    flexBasis: "50%",
    fontWeight: "400",
  },
});

const theme = extendTheme({
  components: {
    List,
  },
});

const AboutMe: React.FC<AboutMeProps> = ({ ...props }) => {
  return (
    <chakra.div
      id="about-me"
      data-scroll="about-me"
      display="flex"
      padding="3rem"
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
          <chakra.p
            marginTop="2rem"
            fontFamily="Lato"
            fontSize="16px"
            fontWeight="400"
            text-indent="2em"
          >
            Why, hello there 👋 I'm Myles - a dev, tutor, and mentor - helping
            dozens of new devs make the transition into tech. I made my
            transition to development in 2016, working with different languages,
            frameworks, and libraries throughout the years.
          </chakra.p>
          <chakra.p
            marginTop="1rem"
            fontFamily="Lato"
            fontSize="16px"
            fontWeight="400"
            text-indent="2em"
          >
            Below is a list of the web tech that I've grown happy to use, but it
            is not exhaustive. I've also worked with Ruby, C++, C#, Python, and
            Rust, along with a few popular libraries for those languages - such
            as Rails(Ruby) and Django(Python).
          </chakra.p>
          <chakra.h1
            marginTop="1rem"
            fontFamily="Lato"
            fontSize="24px"
            fontWeight="900"
          >
            my current preferred tech
          </chakra.h1>
          <chakra.div
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <chakra.ul
              display="flex"
              flexWrap="wrap"
              listStylePosition="inside"
              listStyleType="none"
            >
              <List>
                <Icon as={FaReact} color="#5ADAFD" marginRight="0.5em" />
                React
              </List>
              <List>
                <Icon as={SiExpress} color="#FFFFFF" marginRight="0.5em" />
                Express
              </List>
              <List>
                <Icon as={FaNodeJs} color="#8FC43E" marginRight="0.5em" />
                Node.js
              </List>
              <List>
                <Icon as={SiGraphql} color="#E233A8" marginRight="0.5em" />
                GraphQL
              </List>
              <List>
                <Icon
                  as={SiApollographql}
                  color="#FFFFFF"
                  marginRight="0.5em"
                />
                Apollo
              </List>
              <List>
                <Icon as={SiNextdotjs} color="#FFFFFF" marginRight="0.5em" />
                Next.js
              </List>
              <List>
                <Icon as={SiChakraui} color="#FFFFFF" marginRight="0.5em" />
                Chakra UI
              </List>
              <List>
                <Icon as={FaSass} color="#CA6496" marginRight="0.5em" />
                SASS/SCSS
              </List>
              <List>
                <Icon as={SiTypescript} color="#2F74C0" marginRight="0.5em" />
                Typescript
              </List>
            </chakra.ul>
          </chakra.div>
        </chakra.div>
        <chakra.div
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
          flexBasis={{ base: "100%", sm: "100%", md: "50%" }}
        >
          <chakra.h1 fontFamily="Lato" fontSize="60px" fontWeight="900">
            about me
          </chakra.h1>
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
