import type { AppProps } from "next/app";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.scss";
import { polyfill } from "seamless-scroll-polyfill";
import React, { useEffect } from "react";
import Script from "next/script";

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
        async={true}
        src={process.env.UMAMI_SRC}
        data-website-id={process.env.DATA_WEBSITE_ID}
      />
      <Component {...pageProps} />
      <SpeedInsights />
    </PrimaryLayout>
  );
}
