/**
 * File: /src/components/AboutMe.tsx
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

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = ({ ...props }) => {
  return (
    <chakra.div
      id="about-me"
      display="flex"
      height="80vh"
      justifyContent="center"
      alignItems="center"
      flexDirection={["column", "row"]}
      // background="linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(lyndon-li-unsplash.jpg)"
      backgroundSize="cover"
      backgroundColor="var(--color-dark)"
      backgroundPosition="bottom"
      color="#FFFFFF"
    >
      <chakra.div>
        <chakra.h2>
          About me
        </chakra.h2>
      </chakra.div>
    </chakra.div>
  );
}

export default AboutMe;