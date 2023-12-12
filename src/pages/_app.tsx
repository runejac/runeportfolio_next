import type { AppProps } from "next/app";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.scss";
import { polyfill } from "seamless-scroll-polyfill";
import React, { useEffect } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useEffect(() => {
    polyfill();
  }, []);

  return (
    <PrimaryLayout>
      <Component {...pageProps} />
      <SpeedInsights />
    </PrimaryLayout>
  );
}
