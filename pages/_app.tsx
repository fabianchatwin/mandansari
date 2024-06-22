import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/fafalala.css";
import "../styles/gallery.css";
import '../utils/fontawesome';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initGA, logPageView } from '../utils/ga';

function Application({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    initGA();
    logPageView();
    router.events.on('routeChangeComplete', logPageView);
    return () => {
      router.events.off('routeChangeComplete', logPageView);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://fafalala.org/ws-image-1.jpg" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="683" />
        <meta property="og:image:alt" content="Welcome to fafalala.org" />        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
