/**
 * File: /src/components/Welcome.tsx
 * Project: portfolio
 * Purpose: This will be shown in index.tsx and will be the primary landing
 *          page.
 *
 * @author Myles Berueda
 * @date   Saturday November 20th 2021
 * -----
 * Modified: Saturday November 20th 2021 8:46:20 pm
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 ***/
import styles from "./Welcome.module.scss";
import React from "react";
import { chakra } from "@chakra-ui/react";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = ({ ...props }) => {
  const titleLine: string = "Hi! I'm Myles :)";
  const skills: string[] = ["web"];

  console.log(
    "%c\n%chmmmmmm 🤔",
    "",
    "border: 2px solid #9e9595; padding: 0.5em; background-color: #2f2f2f; font-size: 50px; text-transform: uppercase; color: red; text-shadow: -2px -2px red, 4px 4px orange, 4px 4px yellow, -6px -6px green, 10px 10px blue, -12px -12px purple;"
  );

  const typewritter = (sentences: string[]) => {};

  return (
    <chakra.div
      data-scroll="home"
      id="home"
      display="flex"
      height="100vh"
      padding={{ base: "0.5rem" }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="green.500"
      background="linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(1125841.png) fixed"
      backgroundSize="cover"
      color="#FFFFFF"
    >
      <chakra.h2
        textTransform="uppercase"
        letterSpacing="0.5rem"
        fontSize={{ base: "48px", sm: "48px", md: "72px" }}
        fontWeight="900"
        textAlign="center"
      >
        {titleLine}
      </chakra.h2>
      <chakra.div display="inline-flex">
        <chakra.p
          textTransform="uppercase"
          letterSpacing="0.5rem"
          fontSize={{ base: "24px", sm: "24px", md: "24px" }}
          padding="1rem"
          fontWeight="400"
          textAlign="center"
        >
          {"I'm a "}
          <chakra.span
            backgroundColor="black"
            marginRight="0.5em"
            padding="0.2rem 0.5rem"
          >
            {skills}
            <chakra.span letterSpacing="0.05em" className={styles.cursor}>
              {" "}
            </chakra.span>
          </chakra.span>{" "}
          developer
        </chakra.p>
      </chakra.div>
    </chakra.div>
  );
};

export default Welcome;
