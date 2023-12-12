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
        src={"af0f7ea3-8943-4667-a00c-9e83057f2341"}
        data-website-id={"https://umami-runes-team.vercel.app/script.js"}
      />
      <Component {...pageProps} />
      <SpeedInsights />
    </PrimaryLayout>
  );
}
