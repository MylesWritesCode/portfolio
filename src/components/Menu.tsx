/**
 * File: /src/components/Menu.tsx
 * Project: portfolio
 * Purpose: Menu drawer, but it probably won't be a drawer.
 *
 * @author Myles Berueda
 * @date   Tuesday November 23rd 2021
 * -----
 * Modified: Tuesday November 23rd 2021 1:04:07 am
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
import React from "react";
import { chakra, Icon as ChakraIcon, extendTheme } from "@chakra-ui/react";
import {
  FaHome,
  FaGithub,
  FaTwitter,
  FaBuffer,
  FaUserAstronaut,
  FaVial,
  FaNewspaper
} from "react-icons/fa";

interface MenuProps {}

const Icon = chakra(ChakraIcon, {
  baseStyle: {
    boxSize: 8,
    padding: ["0.15rem"],
    margin: ["0.35em 0em"],
  },
});

const theme = extendTheme({
  components: {
    Icon,
  },
});

const Menu: React.FC<MenuProps> = ({ ...props }) => {
  return (
    <chakra.div
      display="flex"
      position="fixed"
      width="4rem"
      height="100vh"
      padding="1rem 0rem"
      left="0"
      top="0"
      right="auto"
      bottom="0"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      background="var(--color-dark)"
      color="#FFFFFF"
    >
      <chakra.div display="flex" flexDirection="column"></chakra.div>
      <chakra.div display="flex" flexDirection="column">
        <chakra.a href="#home">
          <Icon as={FaHome} />
        </chakra.a>
        <chakra.a href="#projects">
          <Icon as={FaVial} />
        </chakra.a>
        <chakra.a href="#about-me">
          <Icon as={FaUserAstronaut} />
        </chakra.a>
        <chakra.a href="#blog">
          <Icon as={FaNewspaper} />
        </chakra.a>
      </chakra.div>
      <chakra.div display="flex" flexDirection="column">
        <chakra.a href="https://github.com/myleswritescode" target="_blank">
          <Icon as={FaGithub} />
        </chakra.a>
        <chakra.a href="https://twitter.com/mylescodesemoji" target="_blank">
          <Icon as={FaTwitter} />
        </chakra.a>
      </chakra.div>
    </chakra.div>
  );
};

export default Menu;
