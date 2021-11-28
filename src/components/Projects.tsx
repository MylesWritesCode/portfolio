/**
 * File: /src/components/Projects.tsx
 * Project: portfolio
 * Purpose: This will be shown in index.tsx and will show some projects that I
 *          want to showcase.
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
        width="100%"
        maxWidth="1080px"
        padding={{ base: "2rem", sm: "0rem", md: "2rem" }}
        flexDirection="column"
      >
        <chakra.div display="flex" width="100%" justifyContent="flex-end">
          <chakra.h1
            width="fit-content"
            margin="1rem 0rem"
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
          justifyContent="center"
          alignItems="center"
        >
          <Project
            title="Order Summary"
            img="https://i.imgur.com/40SEGno.png"
            description="An order summary page with assets from frontendmentor.io"
            github="https://github.com/MylesWritesCode/fm-order-summary-component"
            link="https://fm-order-summary-component-omega.vercel.app/"
          />
          <Project
            title="cm-ecommerce"
            img="https://user-images.githubusercontent.com/24381348/134434625-dfe6a05e-b0d5-4872-83cf-67113cf555d7.png"
            description="A fullstack project with a React frontend and Express backend"
            github="https://github.com/MylesWritesCode/cm-ecommerce"
            link=""
          />
          <Project
            title="30 days of C++"
            img="https://i.imgur.com/A6IRiHR.png"
            description="All my C++ code for Hacker Rank's 30 days of code challenge"
            github="https://github.com/MylesWritesCode/hacker-rank-solutions"
            link=""
          />
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
};

export default Projects;
