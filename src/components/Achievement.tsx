/**
 * File: /src/components/Achievement.tsx
 * Project: portfolio
 * Purpose: // TODO: Add the purpose of the file here.
 * 
 * @author Myles Berueda
 * @date   Sunday November 28th 2021
 * -----
 * Modified: Sunday November 28th 2021 2:23:32 pm
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
**/
import React from 'react';
import { chakra } from '@chakra-ui/react';

interface AchievementProps {}

const Achievement: React.FC<AchievementProps> = ({ ...props }) => {
  return (
    <chakra.div
      background="rgba(0, 0, 0, 0.7)"
      width="100%"
      padding="2rem"
      margin="1rem"
    >
      <chakra.h2>
        achievement works
      </chakra.h2>
    </chakra.div>
  );
}

export default Achievement;