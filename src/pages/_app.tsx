import type { AppProps } from "next/app";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.scss";
import { polyfill } from "seamless-scroll-polyfill";
import { useEffect } from "react";

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
      <Analytics />
      <SpeedInsights />
    </PrimaryLayout>
  );
}
