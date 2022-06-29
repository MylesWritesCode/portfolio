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
    <div
      className="flex m-w-full h-96 my-4 bg-zinc-800 select-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative basis-2/3">
        <img src={img} className="relative h-full w-full object-cover" />
      </div>
      <div className="flex flex-col py-6 px-8 justify-between items-center basis-1/3">
        <h1 className="font-bold">{title}</h1>
        <div>{description}</div>
        <div>
          {github && (
            <a href={github} target="_blank">
              <Icon as={FaGithub} marginRight="0.5rem" />
            </a>
          )}
          {link && (
            <a href={link} target="_blank">
              <Icon as={FaLink} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
