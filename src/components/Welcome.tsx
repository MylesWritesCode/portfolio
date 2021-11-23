/**
 * File: /src/components/Welcome.tsx
 * Project: portfolio
 * Purpose: // TODO: Add the purpose of the file here.
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
  )

  const typewritter = (sentences: string[]) => {};

  return (
    <chakra.div
      display="flex"
      height="100vh"
      width="100vw"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="green.500"
      background="linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(jeremy-thomas-unsplash.jpg)"
      backgroundSize="cover"
      color="white"
    >
      <chakra.h2
        textTransform="uppercase"
        letterSpacing="0.5rem"
        fontSize="5rem"
        fontWeight="900"
        textAlign="center"
      >
        {titleLine}
      </chakra.h2>
      <chakra.div display="inline-flex">
        <chakra.p
          textTransform="uppercase"
          letterSpacing="0.5rem"
          fontSize="1.5em"
          fontWeight="400"
        >
          I'm a{" "}
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
