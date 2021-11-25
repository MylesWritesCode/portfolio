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
import { chakra } from "@chakra-ui/react";

interface ProjectProps {
  title: string;
  img: string;
  description: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  img,
  description,
  ...props
}) => {
  return (
    <chakra.div>
      <chakra.h1>Project works</chakra.h1>
    </chakra.div>
  );
};

export default Project;
