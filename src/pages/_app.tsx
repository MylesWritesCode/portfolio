/**
 * File: /src/pages/_app.tsx
 * Project: portfolio
 * Purpose: Entry to the landing page
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
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from 'next/head';
import { chakra, ChakraProvider } from "@chakra-ui/react";
import Menu from "@components/Menu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Portfolio</title>
    </Head>
    <ChakraProvider>
      <div data-spy="scroll" data-target="#navbar-scroll-spy" data-offset="0">
      <Menu />
      <chakra.div paddingLeft="4rem" maxWidth="calc(100vw-4rem)">
        <Component {...pageProps} />
      </chakra.div>
      </div>
    </ChakraProvider>
    </>
  );
}

export default MyApp;
