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
  const skills: string[] = ["developer"];
  
  const typewritter = (sentences: string[]) => {

  };

  return (
    <chakra.div
      display="flex"
      height="100vh"
      width="100vw"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="green.500"
    >
      <chakra.h2>{titleLine}</chakra.h2>
      <chakra.div display="inline-flex">
        <chakra.p>I'm a <chakra.span>{ skills }</chakra.span></chakra.p>
      </chakra.div>
    </chakra.div>
  );
};

export default Welcome;
