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
import React from "react";
import { chakra, Icon } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { FaGithub, FaLink } from "react-icons/fa";

interface ProjectProps {
  title: string;
  img: string;
  description: string;
  link: string;
  github?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  img,
  description,
  link,
  github,
  ...props
}) => {
  return (
    <chakra.div
      width="300px"
      height="200px"
      marginTop="2rem"
      backgroundColor="var(--color-light-dark)"
      fontFamily="Lato"
      _hover={{}}
    >
      <chakra.div
        backgroundImage={`url(${img})`}
        backgroundPosition="center"
        backgroundSize="100%"
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
          <chakra.a href={github} target="_blank">
            <Icon as={FaGithub} marginRight="0.5rem" />
          </chakra.a>
          <chakra.a href={link} target="_blank">
            <Icon as={FaLink} />
          </chakra.a>
        </chakra.div>
      </chakra.div>

      <chakra.div
        display="flex"
        position="relative"
        height="80%"
        width="100%"
        top="-100%"
        left="0"
        justifyContent="center"
        alignItems="center"
        background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
      >
        {description}
      </chakra.div>
    </chakra.div>
  );
};

export default Project;
