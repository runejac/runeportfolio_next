import type { AppProps } from "next/app";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.scss";
import { polyfill } from "seamless-scroll-polyfill";
import React, { useEffect } from "react";
import Script from "next/script";

const DATA_WEBSITE_ID = process.env.DATA_WEBSITE_ID;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useEffect(() => {
    polyfill();
  }, []);

  return (
    <PrimaryLayout>
      <Script strategy={"afterInteractive"} data-website-id={DATA_WEBSITE_ID} />
      <Component {...pageProps} />
      <SpeedInsights />
    </PrimaryLayout>
  );
}
