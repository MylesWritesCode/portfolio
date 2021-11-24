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
import React from 'react';
import { chakra } from '@chakra-ui/react';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({ ...props }) => {
  return (
    <chakra.div
      id="projects"
      data-scroll="projects"
      display="flex"
      height="80vh"
      justifyContent="center"
      alignItems="center"
      flexDirection={["column", "row"]}
      backgroundColor="var(--color-dark)"
      color="#FFFFFF"
    >
      <chakra.div>
        <chakra.h2
          fontSize="1rem"
        >
          Projects
        </chakra.h2>
      </chakra.div>
    </chakra.div>
  );
}

export default Projects;