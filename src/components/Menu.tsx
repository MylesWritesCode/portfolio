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
import {
  chakra,
  Icon as ChakraIcon,
  Tooltip,
  extendTheme,
} from "@chakra-ui/react";
import {
  FaHome,
  FaGithub,
  FaMastodon,
  FaUserAstronaut,
  FaVial,
  FaRegNewspaper,
  FaLinkedin,
} from "react-icons/fa";
import { SiOnlyfans } from "react-icons/si";

interface MenuProps { }

const Icon = chakra(ChakraIcon, {
  baseStyle: {
    boxSize: 8,
    padding: ["0.15rem"],
    margin: ["0.35em 0em"],
    _hover: {
      color: "var(--color-red)",
    },
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
      id="navbar-scroll-spy"
      display="flex"
      position="fixed"
      width="4rem"
      height={{ base: "100vh", sm: "100%" }}
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
      <chakra.div
        display="flex"
        fontFamily="Lato"
        fontWeight="900"
        fontSize="48px"
        flexDirection="column"
      >
      </chakra.div>
      <chakra.div display="flex" flexDirection="column">
        <Tooltip label="home" placement="right">
          <chakra.a href="#home">
            <Icon as={FaHome} />
          </chakra.a>
        </Tooltip>
        <Tooltip label="about me 👋" placement="right">
          <chakra.a href="#about-me">
            <Icon as={FaUserAstronaut} />
          </chakra.a>
        </Tooltip>
        <Tooltip label="projects" placement="right">
          <chakra.a href="#projects">
            <Icon as={FaVial} />
          </chakra.a>
        </Tooltip>
        <Tooltip label="blog posts (coming soon? 🤞)" placement="right">
          <chakra.a href="#blog">
            <Icon as={FaRegNewspaper} />
          </chakra.a>
        </Tooltip>
      </chakra.div>
      <chakra.div display="flex" flexDirection="column">
        <Tooltip label="github.com/myleswritescode" placement="right">
          <chakra.a href="https://github.com/myleswritescode" rel="me" target="_blank">
            <Icon as={FaGithub} />
          </chakra.a>
        </Tooltip>
        <Tooltip label="@mylesberueda@mstdn.social" placement="right">
          <chakra.a href="https://mstdn.social/@mylesberueda" rel="me" target="_blank">
            <Icon as={FaMastodon} />
          </chakra.a>
        </Tooltip>

        <Tooltip label="linkedin.com/in/myles-berueda" placement="right">
          <chakra.a href="https://linkedin.com/in/myles-berueda" rel="me" target="_blank">
            <Icon as={FaLinkedin} />
          </chakra.a>
        </Tooltip>
        <Tooltip label="OnlyFans" placement="right">
          <chakra.a href="./onlyfans.gif" target="_blank">
            <Icon as={SiOnlyfans} />
          </chakra.a>
        </Tooltip>
      </chakra.div>
    </chakra.div>
  );
};

export default Menu;
