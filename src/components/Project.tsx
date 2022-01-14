/**
 * File: /src/components/Project.tsx
 * Project: portfolio
 * Purpose: Ideally I'd have a few projects to show off on my portfolio. I've
 *          split this code into this component since it's repeatable.
 *
 * @author Myles Berueda
 * @date   Wednesday November 24th 2021
 * -----
 * Modified: Wednesday November 24th 2021 7:00:55 pm
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
import React, { useState } from "react";
import { chakra, Box as ChakraBox, BoxProps, Icon } from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

export interface ProjectProps {
  title: string;
  img: string;
  description: string;
  link?: string;
  github?: string;
}

export const Box = motion<BoxProps>(ChakraBox);

const Project: React.FC<ProjectProps> = ({
  title,
  img,
  description,
  link,
  github,
  ...props
}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <chakra.div
      display="flex"
      width="320px"
      margin="0.5rem"
      flexDirection="column"
      backgroundColor="var(--color-light-dark)"
      fontFamily="Lato"
      userSelect="none"
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <chakra.div
        position="relative"
        background="green.700"
        padding="0 0 66.67% 0"
      >
        <chakra.img
          src={img}
          position="absolute"
          top="0"
          left="0"
          height="100%"
          width="100%"
          objectFit="cover"
        />
        {isHovering && (
          <chakra.div
            display="flex"
            position="absolute"
            top="0"
            left="0"
            height="100%"
            width="100%"
            padding="2rem"
            justifyContent="center"
            alignItems="center"
            background="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"
          >
            {description}
          </chakra.div>
        )}
      </chakra.div>
      <chakra.div
        display="flex"
        height="20%"
        padding="1rem 1rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <chakra.h1 fontWeight="900">{title}</chakra.h1>
        <chakra.div>
          {github && (
            <chakra.a href={github} target="_blank">
              <Icon as={FaGithub} marginRight="0.5rem" />
            </chakra.a>
          )}
          {link && (
            <chakra.a href={link} target="_blank">
              <Icon as={FaLink} />
            </chakra.a>
          )}
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
};

export default Project;
