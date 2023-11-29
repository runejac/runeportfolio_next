import React from "react";
import MainPage from "@/components/MainPage";
import { DataContext, DataContextProps } from "@/context/DataContext";
import CustomHead from "@/components/layouts/head/CustomHead";
import { WindowWidthContext } from "@/context/WindowWidthContext";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import introText from "../data/introText.json";
import projectsText from "../data/projectsText.json";
import projectsData from "../data/projectsData.json";
import aboutText from "../data/aboutText.json";

export default function Home({
  introText,
  projectsText,
  projectsData,
  aboutText,
}: DataContextProps) {
  const windowWidth = useWindowWidth();
  return (
    <WindowWidthContext.Provider value={windowWidth}>
      <DataContext.Provider
        value={{ introText, projectsText, projectsData, aboutText }}
      >
        <CustomHead
          title={"Rune Oliveira"}
          content={
            "frontend, developer, rune oliveira, rune daniel jacobsen oliveira, technologist, norsk utvikler, norsk frontend"
          }
        />
        <MainPage />
      </DataContext.Provider>
    </WindowWidthContext.Provider>
  );
}

export async function getStaticProps() {
  return {
    props: { introText, projectsText, projectsData, aboutText },
  };
}
