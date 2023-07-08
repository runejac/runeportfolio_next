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
      <meta name="description" content={content} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/public/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
