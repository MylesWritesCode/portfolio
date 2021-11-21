/**
 * File: /src/pages/index.tsx
 * Project: portfolio
 * Purpose: The main page for my portfolio. 
 * 
 * @author Myles Berueda
 * @date   Saturday November 20th 2021
 * -----
 * Modified: Saturday November 20th 2021 4:55:46 pm
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
**/
import React from 'react';
import type { NextPage } from 'next'
import { chakra } from '@chakra-ui/react';

import Welcome from '@components/Welcome';

const Home: NextPage = () => {
  return (
    <chakra.div>
      <Welcome />
    </chakra.div>
  );
}

export default Home
