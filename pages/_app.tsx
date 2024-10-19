import React, { useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from 'next/router';
import Script from 'next/script'
import { initGA, GA_TRACKING_ID } from '../utils/gtag';

import "../styles/fafalala.css";
import "../styles/gallery.css";
import '../utils/fontawesome';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

function Application({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    initGA();

    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <title>Welcome to fafalala Support Network!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://fafalala.org/ws-image-1.jpg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta name="description" content="The crowdfunding project started at Fabian and Lia's wedding." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
