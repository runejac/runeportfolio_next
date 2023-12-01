import React from "react";
import MainPage from "@/components/MainPage";
import DataProvider, { DataContextProps } from "@/context/DataContext";
import CustomHead from "@/components/layouts/head/CustomHead";
import WindowWidthProvider from "@/context/WindowWidthContext";

export default function Home(props: DataContextProps) {
  return (
    <>
      <CustomHead
        title={"Rune Oliveira"}
        content={
          "Discover Rune Oliveira's work as a Norwegian frontend and fullstack developer. Delve into projects showcasing development skills and personal life."
        }
      />
      <WindowWidthProvider>
        <DataProvider data={props}>
          <OpenModalProvider>
            <MainPage />
          </OpenModalProvider>
        </DataProvider>
      </WindowWidthProvider>
    </>
  );
}

import introText from "../data/introText.json";
import projectsText from "../data/projectsText.json";
import projectsData from "../data/projectsData.json";
import aboutText from "../data/aboutText.json";
import OpenModalProvider from "@/context/OpenModalContext";

export async function getStaticProps() {
  return {
    props: { introText, projectsText, projectsData, aboutText },
  };
}
