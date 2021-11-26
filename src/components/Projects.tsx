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
          <chakra.h1
            width="fit-content"
            border="5px solid #FFFFFF"
            fontSize={{ base: "60px", sm: "48px", md: "60px" }}
            fontWeight="900"
            padding={{ base: "0rem 1rem", sm: "0rem 1rem" }}
          >
            projects
          </chakra.h1>
        </chakra.div>
        <chakra.div
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Project
            title="Order Summary"
            img="https://i.imgur.com/40SEGno.png"
            description="An order summary page"
            github="https://github.com/MylesWritesCode/fm-order-summary-component"
            link="https://fm-order-summary-component-omega.vercel.app/"
          />
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
