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
        src={"9e3daab4-9492-41da-8572-c942a55cc23d"}
        data-website-id={"https://eu.umami.is/script.js"}
      />
      <Component {...pageProps} />
      <SpeedInsights />
    </PrimaryLayout>
  );
}
