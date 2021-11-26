/**
 * File: /src/components/Projects.tsx
 * Project: portfolio
 * Purpose: // TODO: Add the purpose of the file here.
 *
 * @author Myles Berueda
 * @date   Tuesday November 23rd 2021
 * -----
 * Modified: Tuesday November 23rd 2021 4:03:43 pm
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
import React from "react";
import { chakra } from "@chakra-ui/react";

import Project from "@components/Project";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({ ...props }) => {
  return (
    <chakra.div
      id="projects"
      data-scroll="projects"
      display="flex"
      padding="3rem"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      fontFamily="Lato"
      backgroundColor="var(--color-dark)"
      color="#FFFFFF"
    >
      <chakra.div
        display="flex"
        maxWidth="1080px"
        padding="2rem"
        flexDirection="column"
      >
        <chakra.div display="flex" width="100%" justifyContent="flex-end">
          <chakra.h1>projects</chakra.h1>
        </chakra.div>
        <chakra.div
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Project title="" img="" description="" link="" />
          <Project title="" img="" description="" link="" />
          <Project title="" img="" description="" link="" />
          <Project title="" img="" description="" link="" />
          <Project title="" img="" description="" link="" />
          <Project title="" img="" description="" link="" />
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
};

export default Projects;
