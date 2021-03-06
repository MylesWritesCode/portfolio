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

import Project, { ProjectProps } from "@components/Project";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({ ...props }) => {
  const projects: ProjectProps[] = [
    {
      title: "Chat with WebSockets",
      img: "/web-chat-demo.webm",
      description: "A small chat app using Rust for the backend server and React for the frontend",
      github: "https://github.com/MylesWritesCode/web-chat",
    },
    {
      title: "Snake!",
      img: "/snake-with-wasm.jpg",
      description: "Built with Rust into WASM, with a React frontend",
      github: "https://github.com/MylesWritesCode/snake",
    },
    {
      title: "Order Summary",
      img: "/order-summary.png",
      description: "An order summary page with assets from frontendmentor.io",
      github: "https://github.com/MylesWritesCode/fm-order-summary-component",
      link: "https://fm-order-summary-component-omega.vercel.app/",
    },
    {
      title: "Animation Playground",
      img: "/animation-playground.png",
      description:
        "A fullstack project with a React frontend and Express backend",
      github: "https://github.com/MylesWritesCode/cm-ecommerce",
      link: "",
    },
    {
      title: "30 days of C++",
      img: "/30-days-of-code.png",
      description:
        "All my C++ code for Hacker Rank's 30 days of code challenge",
      github: "https://github.com/MylesWritesCode/hacker-rank-solutions",
      link: "",
    },
    {
      title: "Playground",
      img: "/myles-codes-playground.webp",
      description:
        "This was initially going to be my portfolio, but I opted to do this single-page instead. I'm now using this as a playground.",
      github: "https://github.com/MylesWritesCode/myles-codes-playground",
      link: "",
    },
    {
      title: "Shoepify",
      img: "/shoepify.png",
      description:
        "I wanted to learn a little more about the Shopify ecosystem, specifically pertaining to headless integration and app development. Here's my take on an ecommerce shop.",
      github: "https://github.com/MylesWritesCode/shoepify",
      link: "https://shoepify.vercel.app/products",
    },
  ];

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
      color="#FFFFFF">
      <chakra.div
        display="flex"
        width="100%"
        maxWidth="1080px"
        padding={{ base: "0rem", sm: "0rem", md: "2rem" }}
        flexDirection="column">
        <chakra.div display="flex" width="100%" justifyContent="flex-end">
          <chakra.h1
            width="fit-content"
            margin="1rem 0rem"
            border="5px solid #FFFFFF"
            fontSize={{ base: "48px", sm: "48px", md: "60px" }}
            fontWeight="900"
            padding={{ base: "0rem 1rem", sm: "0rem 1rem" }}>
            projects
          </chakra.h1>
        </chakra.div>
        <chakra.div
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              img={project.img}
              github={project.github}
              link={project.link}
              reverse={index % 2 == 0}
            />
          ))}
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
};

export default Projects;
