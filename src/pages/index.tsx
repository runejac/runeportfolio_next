import React from "react";
import MainPage from "@/components/MainPage";
import { DataContext, DataContextProps } from "@/context/DataContext";
import retroGameMarket from "../../public/images/retro-game.png";
import reversedImageSearchImg from "../../public/images/reversedImageSearchImage.png";
import tidsreisenImg from "../../public/images/tidsreisenImage.png";
import pizzaPortalImg from "../../public/images/pizza-portal.png";

export default function Home({ introText, cardsData }: DataContextProps) {
  return (
    <DataContext.Provider value={{ introText, cardsData }}>
      <MainPage />
    </DataContext.Provider>
  );
}

export async function getStaticProps() {
  const introText = {
    h1: "Hi, my name is",
    h2: "Rune Oliveira.",
    h3: "Developer & consultant",
    p1: "Currently working as a fullstack developer.",
    p2:
      "With a inner flame for frontend development across mobile and web platforms, I bring expertise in various methodologies, " +
      "a keen interest in UX and UI, and my passion lies in understanding and empathizing with end-users, ensuring that every interface I create is intuitive, enjoyable, and efficient.",
  };

  const cardsData = [
    {
      id: 0,
      appTitle: "Retro Market",
      appType: "HYBRID APP",
      img: retroGameMarket,
      githubLink: "https://github.com/runejac/TDS200_h22_exam",
      techSpecs: [
        "TypeScript",
        "Vue.js",
        "Ionic",
        "Directus",
        "GraphQL",
        "Mapbox.js",
      ],
      appDescription:
        "The ultimate destination for retro games collections. With a vast selection of used, new, and mint condition games, there's something for every type of gamer. Plus, an interactive map feature helps you connect with sellers near you.",
    },
    {
      id: 1,
      appTitle: "Reversed Image",
      appType: "ANDROID APP",
      img: reversedImageSearchImg,
      githubLink:
        "https://github.com/runejac/PGR208_EXAM_Reversed_Image_Search",
      techSpecs: ["Kotlin", "XML", "SQLite"],
      appDescription:
        "On a Android phone, you can either take a photo with the camera or choose an existing image from the phone's storage as input and the app will return results related to the image.",
    },
    {
      id: 2,
      appTitle: "Byåa Tidsreisen",
      appType: "WEB APP",
      img: tidsreisenImg,
      githubLink: "https://github.com/runejac/PRO201_EXAM_Tidsreisen_Byaaa",
      externalLink: "https://tidsreisen.herokuapp.com/",
      techSpecs: ["React.js", "Node.js", "Express.js", "MongoDB", "Mapbox.js"],
      appDescription:
        "A web app requested by Rælingen municipality for primary school pupils. With the intention of learning what a " +
        "cultural trail was and looked like 350 years ago. GPS tracking and QR scanning is two of the main features of this application.",
      downAtPaaS: "Down due to Heroku's change in pricing plan.",
    },
    {
      id: 3,
      appTitle: "Gylne Pizza",
      appType: "WEB APP",
      img: pizzaPortalImg,
      githubLink:
        "https://github.com/runejac/runejac.github.io/tree/main/WebprosjektSolution",
      externalLink: "https://runejac.github.io/WebprosjektSolution/index.html",
      techSpecs: ["JavaScript", "Bulma", "Google charts"],
      appDescription:
        "A portal for the management of a company, to have an overview of turnover, best selling items, manage employees, restaurants and their menus.",
    },
  ];

  return {
    props: { introText, cardsData },
  };
}
