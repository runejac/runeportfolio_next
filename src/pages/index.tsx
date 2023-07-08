import React from "react";
import MainPage from "@/components/MainPage";
import { DataContext, DataContextProps } from "@/context/DataContext";

export default function Home({ introText }: DataContextProps) {
  return (
    <DataContext.Provider value={{ introText }}>
      <MainPage />
    </DataContext.Provider>
  );
}

export async function getStaticProps() {
  const introText = {
    h1: "Hi, my name is",
    h2: "Rune Oliveira.",
    h3: "Developer and consultant.",
    p1: "I'm currently in my final year of my bachelor's degree in IT. I like to learn new technologies, I love great teamwork and I am fond of good user experiences.",
    p2: "During my experience, I have enjoyed working with Vue.js, TypeScript, .NET and developing on mobile platforms with SwiftUI.",
  };

  const aboutText = {};

  return {
    props: { introText },
  };
}
