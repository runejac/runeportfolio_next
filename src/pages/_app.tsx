import type { AppProps } from "next/app";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import "../styles/globals.scss";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <PrimaryLayout>
      <Component {...pageProps} />
    </PrimaryLayout>
  );
}
