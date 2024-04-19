import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add other meta tags, title, or links here */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
