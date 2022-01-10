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
      width="320px"
      height="224px"
      margin="0.5rem"
      backgroundColor="var(--color-light-dark)"
      fontFamily="Lato"
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <chakra.div
        background={`url(${img})`}
        backgroundPosition="center"
        backgroundSize="cover"
        height="80%"
        width="100%"
      />
      <chakra.div
        display="flex"
        height="20%"
        padding="0rem 1rem"
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

      {isHovering && (
        <chakra.div
          display="flex"
          padding="2rem"
          position="relative"
          height="80%"
          width="100%"
          top="-100%"
          left="0"
          justifyContent="center"
          alignItems="center"
          background="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"
        >
          {description}
        </chakra.div>
      )}
    </chakra.div>
  );
};

export default Project;
