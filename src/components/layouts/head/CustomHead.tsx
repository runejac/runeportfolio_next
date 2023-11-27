import React from "react";
import Head from "next/head";

type CustomHeadProps = {
  title: string;
  content: string;
};
const CustomHead = ({ title, content }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={content} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
