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
import {
  chakra,
  Box as ChakraBox,
  BoxProps,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaLink, FaMedal } from "react-icons/fa";

export interface AchievementProps {
  title: string;
  subtitle: string;
  description: string;
  proof?: string;
  link?: string;
  github?: string;
}

const Box = motion<BoxProps>(ChakraBox);

const containerVariants: Variants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  onHover: {},
  inView: {
    y: 0,
    opacity: 1,
  },
};

const Achievement: React.FC<AchievementProps> = ({
  title,
  subtitle,
  description,
  proof,
  link,
  github,
  ...props
}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    // Card
    <Box
      position="relative"
      margin="0.5rem 0rem"
      padding="2rem"
      width="100%"
      background="rgba(0, 0, 0, 0.5)"
      boxShadow="dark-lg"
      backdropFilter="blur(5px)"
      fontFamily="Lato"
      overflow="hidden"
      variants={containerVariants}
      initial="initial"
      whileHover="onHover"
      whileInView="inView"
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
        background: isHovering
          ? "var(--color-light-dark)"
          : "var(--color-light-dark)",
        zIndex: 10,
      }}
    >
      {/* Content */}
      <chakra.div
        display="flex"
        width="100%"
        minHeight="80px"
        position="relative"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        zIndex={50}
      >
        <chakra.div
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Icon
            as={FaMedal}
            margin={{base: "1rem 0", md: "0 1.5rem 0 0"}}
            marginRight={{ base: "0", md: "1.5em" }}
            boxSize={"24px"}
          />
          <chakra.div>
            <chakra.div display="flex" flexWrap="wrap">
              <chakra.h2
                fontWeight="900"
                flexBasis={{ base: "auto", sm: "100%", md: "auto" }}
              >
                {title}
              </chakra.h2>
              <chakra.span
                display={{ base: "none", sm: "none", md: "block" }}
                margin="0rem 1rem"
              >
                &#8226;
              </chakra.span>
              <chakra.h2 fontStyle="italic">{subtitle}</chakra.h2>
            </chakra.div>
            <chakra.p>{description}</chakra.p>
          </chakra.div>
        </chakra.div>
        <chakra.div
          display="flex"
          margin={{ base: "0.5rem", md: "0" }}
          flexDirection={{ base: "row", md: "column" }}
          width={{base: "100%", md: "unset"}}
          justifyContent={{base: "space-evenly", md: "center"}}
          alignItems="center"
        >
          {proof && (
            <Tooltip label="proof" placement="right">
              <chakra.a href={proof} target="_blank">
                <Icon as={FaMedal} />
              </chakra.a>
            </Tooltip>
          )}
          {github && (
            <Tooltip label="github" placement="right">
              <chakra.a href={github} target="_blank">
                <Icon as={FaGithub} />
              </chakra.a>
            </Tooltip>
          )}
          {link && (
            <Tooltip label="link" placement="right">
              <chakra.a href={link} target="_blank">
                <Icon as={FaLink} />
              </chakra.a>
            </Tooltip>
          )}
        </chakra.div>
      </chakra.div>{" "}
      {/* Content end */}
    </Box>
  );
};

export default Achievement;
