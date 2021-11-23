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
import { chakra } from "@chakra-ui/react";

interface MenuProps {}

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
      background="var(--color-dark)"
      color="#FFFFFF"
    >
      Something goes in here
    </chakra.div>
  );
};

export default Menu;
