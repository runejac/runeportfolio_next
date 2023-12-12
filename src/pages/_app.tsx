import type { AppProps } from "next/app";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.scss";
import { polyfill } from "seamless-scroll-polyfill";
import React, { useEffect } from "react";
import Script from "next/script";

const GTM_ID = "GTM-TWBGSRVG";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useEffect(() => {
    polyfill();
  }, []);

  return (
    <PrimaryLayout>
      <Script
        id={"google-tag-manager"}
        strategy="afterInteractive"
      >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}')`}</Script>
      <Component {...pageProps} />
      <SpeedInsights />
    </PrimaryLayout>
  );
}
