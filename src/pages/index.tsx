import React from "react";
import MainPage from "@/components/MainPage";
import { DataContext, DataContextProps } from "@/context/DataContext";
import retroGameMarket from "../../public/images/retro-game.png";
import reversedImageSearchImg from "../../public/images/reversedImageSearchImage.png";
import tidsreisenImg from "../../public/images/tidsreisenImage.png";
import pizzaPortalImg from "../../public/images/pizza-portal.png";
import CustomHead from "@/components/layouts/head/CustomHead";

export default function Home({
  aboutText,
  projectsText,
  introText,
  cardsData,
}: DataContextProps) {
  return (
    <DataContext.Provider
      value={{ aboutText, projectsText, introText, cardsData }}
    >
      <CustomHead
        title={"Rune Oliveira"}
        content={
          "frontend, developer, rune oliveira, rune daniel jacobsen oliveira, technologist"
        }
      />
      <MainPage />
    </DataContext.Provider>
  );
}

export async function getStaticProps() {
  const introText = {
    h1: "Rune Oliveira",
  };

  const aboutText = {
    p1: "My tech journey started in youth, building desktop computers and exploring the intricacies of hardware and software, from an e-commerce shop where I would later in life become a Purchase Manager on the same components.",
    p2: "This early interest culminated in my decision to pursue a bachelor's degree in information technology in Oslo, with a specialization in ",
    p2a: ". I am particularly fascinated by the practical aspects of technology, especially how different systems communicate and connect to create a unified experience for the user.",
    p3: "Outside of my professional life in technology, I am a person of diverse interests and passions. I have a deep appreciation for nature, often spending my free time engaging in outdoor activities like fly fishing, which allows me to disconnect and find balance. My interest in martial arts, particularly Brazilian jiu-jitsu, reflects my dedication to discipline and continuous self-improvement. I am also an avid fan of board games and skiing, activities that not only offer relaxation but also an opportunity to connect with others and enjoy the spirit of competition and strategy. These hobbies, alongside my tech career, shape who I am – someone who values persistence, strategic thinking, and a deep connection with the natural world.",
  };

  const projectsText = {
    p1:
      "Highlighted below are projects I've had the privilege of developing. These endeavors not only honed my programming and development skills but also stand testament to my dedication and craft. I'm especially proud of these collaborations, each borne out of shared passion and synergy with fellow students during my academic journey.\n" +
      "\n",
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
      appTitle: "Tidsreisen",
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
    props: { aboutText, projectsText, introText, cardsData },
  };
}
