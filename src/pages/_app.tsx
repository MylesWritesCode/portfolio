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
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
