/**
 * File: /src/components/Achievement.tsx
 * Project: portfolio
 * Purpose: // TODO: Add the purpose of the file here.
 *
 * @author Myles Berueda
 * @date   Sunday November 28th 2021
 * -----
 * Modified: Sunday November 28th 2021 2:23:32 pm
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
import React, { useState } from "react";
import { chakra, Box as ChakraBox, BoxProps, Icon } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { FaLink, FaMedal } from "react-icons/fa";

export interface AchievementProps {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
}

const Box = motion<BoxProps>(ChakraBox);

const containerVariants: Variants = {
  initial: {
    // border: "5px solid rgba(0, 0, 0, 0.15)",
  },
  onHover: {
    // border: "5px solid rgba(255, 255, 255, 1)",
  },
};

const Achievement: React.FC<AchievementProps> = ({
  title,
  subtitle,
  description,
  link,
  ...props
}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    // Card
    <Box
      position="relative"
      margin="1rem 0rem"
      padding="2rem"
      width="100%"
      background="rgba(0, 0, 0, 0.7)"
      boxShadow="dark-lg"
      backdropFilter="blur(5px)"
      fontFamily="Lato"
      variants={containerVariants}
      initial="initial"
      whileHover="onHover"
      overflow="hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      _after={{
        display: isHovering ? "block" : "none",
        position: "absolute",
        transformOrigin: "center",
        content: '""',
        height: "1000%",
        width: "150%",
        left: "-25%",
        top: "-450%",
        background:
          "conic-gradient(#fd074c, #fe9020, #fff036, #3edf4b, #3369fe, #a106b4, #fd004c)",
        animation: "rgb 2s infinite linear",
      }}
      _before={{
        content: '""',
        inset: "5px",
        position: "absolute",
        background: isHovering ? "rgba(0, 0, 0, 1)" : "transparent",
        zIndex: 10,
      }}
    >
      {/* Content */}
      <chakra.div
        display="flex"
        position="relative"
        alignItems="center"
        zIndex={50}
      >
        <Icon as={FaMedal} marginRight="1.5em" boxSize={"24px"} />
        <chakra.div>
          <chakra.div display="flex">
            <chakra.h2 fontWeight="900">{title}</chakra.h2>
            <chakra.span margin="0rem 1rem">&#8226;</chakra.span>
            <chakra.h2 fontStyle="italic">{subtitle}</chakra.h2>
          </chakra.div>
          <chakra.p>{description}</chakra.p>
          <chakra.a href={link} target="_blank">
            <Icon as={FaLink} />
          </chakra.a>
        </chakra.div>
      </chakra.div> { /* Content end */}
    </Box>
  );
};

export default Achievement;
