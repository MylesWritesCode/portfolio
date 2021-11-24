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
import { FaHome, FaGithub, FaTwitter, FaBuffer } from 'react-icons/fa';

interface MenuProps {}

const Icon = chakra(ChakraIcon, {
  baseStyle: {
    boxSize: 8,
    padding: ["0.15rem"],
    margin: ["0.25em"]
  }
});

const theme = extendTheme({
  components: {
    Icon,
  }
})

const Menu: React.FC<MenuProps> = ({ ...props }) => {
  return (
    <chakra.div
      display="flex"
      position="fixed"
      width="4rem"
      height="100vh"
      left="0"
      top="0"
      right="auto"
      bottom="0"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      background="var(--color-dark)"
      color="#FFFFFF"
    >
      <chakra.div
        display="flex"
        flexDirection="column"
      >
        <Icon as={FaHome} />
        <Icon as={FaGithub} />
        <Icon as={FaTwitter} />
        <Icon as={FaBuffer} />
      </chakra.div>
    </chakra.div>
  );
};

export default Menu;
