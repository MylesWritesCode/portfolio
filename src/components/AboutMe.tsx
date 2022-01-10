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
import Achievement, { AchievementProps } from "./Achievement";

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
  const achievements: AchievementProps[] = [
    {
      title: "freeCodeCamp",
      subtitle: "Responsive Web Design",
      description:
        "Developer Certification, representing approximately 300 hours of coursework in responsive web design.",
      proof:
        "https://freecodecamp.org/certification/myleswritescode/responsive-web-design",
      link: "https://www.freecodecamp.org/learn/responsive-web-design/",
    },
    {
      title: "buildspace",
      subtitle: "Building an NFT game",
      description:
        "Spend a week learning about implementing your own smart contracts on the Ethereum blockchain and connecting it to a React frontend.",
      proof:
        "https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/3873/",
      link: "https://buildspace.so/",
      github:
        "https://github.com/MylesWritesCode/buildspace-turn-based-browser-game",
    },
    {
      title: "Southern New Hampshire University",
      subtitle: "BSc Computer Science",
      description:
        "Formal (remote) education in computer science with a focus on software development.",
    },
  ];

  return (
    <>
      <chakra.div
        id="about-me"
        data-scroll="about-me"
        display="flex"
        // padding={{base: "2rem 5rem", md: "8rem 2rem"}}
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        backgroundSize="cover"
        background="var(--color-light-dark)"
        backgroundPosition="bottom"
        color="#FFFFFF"
      >
        <chakra.div
          display="flex"
          margin={{ base: "1rem" }}
          padding={{base: "3rem 1rem"}}
          width={{base: "70%"}}
          maxWidth={{base: "1024px"}}
          flexDirection="column"
          flex="1 1 50%"
        >
          <chakra.h1
            width="fit-content"
            border="5px solid #FFFFFF"
            fontSize={{ base: "40px", md: "60px" }}
            fontWeight="900"
            padding={{ base: "0rem 1rem", sm: "0rem 1rem" }}
          >
            about me
          </chakra.h1>
          <chakra.div
            display="flex"
            width="100%"
            flexWrap="wrap"
            justifyContent="space-evenly"
            maxWidth="1080px"
          >
            <chakra.div
              display="flex"
              flexDirection="column"
              alignSelf="flex-start"
              flexBasis={{ base: "100%", sm: "100%", md: "50%" }}
              fontFamily="Lato"
              fontSize="16px"
              fontWeight="400"
            >
              <chakra.p marginTop="2rem">
                Why, hello there 👋 I'm Myles - a dev, tutor, and mentor -
                helping dozens of aspiring devs make the transition into tech. I
                made my transition to development in 2016, working with
                different languages, frameworks, and libraries throughout the
                years.
              </chakra.p>
              <chakra.p marginTop="1rem">
                Below is a list of the web tech that I've grown happy to use,
                but it is not exhaustive. I've also worked with Ruby, C++, C#,
                Python, and Rust, along with a few popular libraries for those
                languages - such as Rails(Ruby) and Django(Python).
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
                    <Icon
                      as={SiNextdotjs}
                      color="#FFFFFF"
                      marginRight="0.5em"
                    />
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
                    <Icon
                      as={SiTypescript}
                      color="#2F74C0"
                      marginRight="0.5em"
                    />
                    Typescript
                  </List>
                </chakra.ul>
              </chakra.div>
            </chakra.div>
            <chakra.div
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              alignItems="center"
              flexBasis={{ base: "100%", sm: "100%", md: "50%" }}
              fontFamily="Lato"
            >
              <chakra.div
                margin={{ base: "0rem 0rem", sm: "1rem 0rem" }}
                backgroundImage="guitar-dude.jpg"
                backgroundPosition="top"
                backgroundSize="cover"
                width="100%"
                boxSize={{base: "200px", md: "300px"}}
                border="5px solid #FFFFFF"
                borderRadius="50%"
              />
              <chakra.div>
                <chakra.p fontWeight="16px">
                  In my journey of knowledge growth, I'm also delving into Web3
                  technologies such as Solidity and smart contract development
                  on the Ethereum blockchain.
                </chakra.p>
                <chakra.p fontWeight="16px" marginTop="1rem">
                  If you've got any questions, concerns, or otherwise useful and
                  unuseful comments, feel free to send a DM on Twitter 😀
                </chakra.p>
              </chakra.div>
            </chakra.div>
          </chakra.div>
        </chakra.div>
      </chakra.div>
      <chakra.div
        display="flex"
        padding="5rem 2rem"
        justifyContent="center"
        alignItems="center"
        background="url(altumcode-unsplash.jpg) fixed"
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <chakra.div
          display="flex"
          height="100%"
          width="100%"
          maxWidth="1080px"
          flexDirection="column"
          fontFamily="Lato"
          color="white"
          alignItems="center"
        >
          <chakra.div
            display="flex"
            width="100%"
            margin="1rem 0rem"
            padding="2rem"
            justifyContent="center"
            alignItems="center"
            background="rgba(0, 0, 0, 0.7)"
            boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
            backdropFilter="blur(5px)"
            border="1px solid rgba(0, 0, 0, 0.15)"
          >
            <chakra.h1
              width="fit-content"
              padding={{ base: "0rem 1rem", sm: "0rem 1rem" }}
              fontSize={{ base: "32px", sm: "24px", md: "32px" }}
              textAlign="center"
              fontWeight="900"
            >
              achievements unlocked
            </chakra.h1>
          </chakra.div>
          {achievements.map((a, index) => (
            <Achievement
              key={index}
              title={a.title}
              subtitle={a.subtitle}
              description={a.description}
              proof={a.proof}
              link={a.link}
              github={a.github}
            />
          ))}
        </chakra.div>
      </chakra.div>
    </>
  );
};

export default AboutMe;
