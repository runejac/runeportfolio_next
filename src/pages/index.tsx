import React from "react";
import MainPage from "@/components/MainPage";
import { DataContext, DataContextProps } from "@/context/DataContext";
import retroGameMarket from "../../public/images/retro-game.png";
import reversedImageSearchImg from "../../public/images/reversedImageSearchImage.png";
import tidsreisenImg from "../../public/images/tidsreisenImage.png";
import pizzaPortalImg from "../../public/images/pizza-portal.png";
import Head from "next/head";

export default function Home({
  introText,
  cardsData,
  aboutText2,
}: DataContextProps) {
  return (
    <DataContext.Provider value={{ introText, cardsData, aboutText2 }}>
      <Head>
        <title>Rune Oliveira</title>
      </Head>
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
    p2: "Driven by a passion for frontend development across mobile and web platforms, I bring a deep expertise in various methodologies, a commitment to user-centric design, and an unwavering drive to explore and embrace new technologies.",
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

  const aboutText2 = {
    p1:
      "Beginning my journey in e-commerce, I delved deep into the nuances of the industry while working with CPU's and motherboards at Komplett Group. This foundation in tech laid the groundwork for my move to Oslo from Tønsberg, marking a pivot in my career path towards programming and information technology.\n" +
      "\n",
    p2:
      "Currently, I'm passionate about the realms of frontend web and native mobile development. Although I may be a newer face in the developer world, I bring a fresh perspective, fueled by my history in e-commerce. My dedication to learning and mastering the intricacies of these domains is unwavering.\n" +
      "\n",
    p3:
      "With every line of code, I seek to craft seamless user experiences and push the boundaries of what's possible in digital design. Eager to explore new techniques, tools, and methodologies, I'm on a quest to continually evolve as a developer and contribute innovatively to the tech community.\n" +
      "\n",
  };

  return {
    props: { introText, cardsData, aboutText2 },
  };
}
