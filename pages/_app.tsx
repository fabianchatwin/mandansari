import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/fafalala.css";
import "../styles/gallery.css";
import './fontawesome';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initGA, logPageView } from './ga';

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
        {/* Add other meta tags, title, or links here */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
