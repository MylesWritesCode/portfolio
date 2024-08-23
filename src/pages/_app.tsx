import type { AppProps } from "next/app";
import Head from "next/head";
import { chakra, ChakraProvider } from "@chakra-ui/react";
import Menu from "@components/Menu";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Myles Berueda | Portfolio</title>
        <link rel="me" href="https://mstdn.social/@mylesberueda" />
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
