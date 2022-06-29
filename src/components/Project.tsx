/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Icon, Tooltip } from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";
import { ImageWithModal } from "./ImageWithModal";

export interface ProjectProps {
  title: string;
  img: string;
  description: string;
  link?: string;
  github?: string;
  reverse?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  title,
  img,
  description,
  link,
  github,
  reverse,
  ...props
}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className={[
        "flex w-full h-full my-4 bg-zinc-800 select-none",
        `${reverse && "flex-row-reverse"}`,
      ].join(" ")}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      {/* <div className="overflow-hidden bg-transparent basis-2/3">
        <img
          src={img}
          className="h-full w-full object-contain"
          alt="project-image"
        />
      </div> */}
      <ImageWithModal className="basis-2/3" href={img} />
      <div className="flex flex-col py-6 px-8 justify-between items-center basis-1/3">
        <h1 className="font-bold">{title}</h1>
        <div>{description}</div>
        <div className="flex w-full justify-between items-center stretch">
          {(github || link) && (
            <div>
              <p>links</p>
            </div>
          )}
          <div className="flex gap-2">
            {github && (
            <Tooltip label="find the code" placement="bottom">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center p-2 hover:bg-indigo-600 hover:rounded transition-all ease-in duration-250">
                <Icon as={FaGithub} />
              </a>
              </Tooltip>
            )}
            {link && (
            <Tooltip label="check out the demo" placement="bottom">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center p-2 hover:bg-indigo-600 hover:rounded transition-all ease-in">
                <Icon as={FaLink} />
              </a>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
