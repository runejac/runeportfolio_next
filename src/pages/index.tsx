import React from "react";
import MainPage from "@/components/MainPage";
import { DataContext, DataContextProps } from "@/context/DataContext";
import retroGameMarket from "../../public/images/retro-game.png";
import reversedImageSearchImg from "../../public/images/reversedImageSearchImage.png";
import tidsreisenImg from "../../public/images/tidsreisenImage.png";
import pizzaPortalImg from "../../public/images/pizza-portal.png";
import CustomHead from "@/components/layouts/head/CustomHead";
import { WindowWidthContext } from "@/context/WindowWidthContext";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function Home({
  aboutText,
  projectsText,
  introText,
  cardsData,
}: DataContextProps) {
  const windowWidth = useWindowWidth();
  return (
    <WindowWidthContext.Provider value={windowWidth}>
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
    </WindowWidthContext.Provider>
  );
}

export async function getStaticProps() {
  const introText = {
    h1: "Rune Oliveira",
  };

  const aboutText = {
    p1: "As a child, I was fascinated with technology, dedicating countless hours to researching and building computers for both my friends and myself using components I bought online. This early hobby, rooted in research, sparked a deeper interest in technology, which came full circle later in life when I joined that same online store as a Purchase Manager. In this role, I applied my research skills to oversee the procurement of those very components, combining my childhood passion with professional expertise.",
    p2: "My early fascination with technology led me from Nøtterøy to Oslo to pursue a bachelor's degree in information technology. Specializing in ",
    p2a: ", I found myself increasingly captivated by the field. I spent countless hours, day and night, eagerly learning about the intricacies of both backend and frontend development. I am particularly fascinated by the practical aspects of technology, especially how different systems communicate and connect to create a unified experience for the user.",
    p3: "Outside of my professional life in technology, I am a person of diverse interests and passions. I have a deep appreciation for nature, often spending my free time engaging in outdoor activities like fly fishing, which allows me to disconnect and find balance. My interest in martial arts, particularly Brazilian jiu-jitsu, reflects my dedication to discipline and continuous self-improvement. I am also an avid fan of board games and skiing, activities that not only offer relaxation but also an opportunity to connect with others and enjoy the spirit of competition and strategy. These hobbies, alongside my tech career, shape who I am – someone who values persistence, strategic thinking, and a deep connection with the natural world.",
  };

  const projectsText = {
    p1: "Here's a look at some of the projects I've really enjoyed working on. Each one has been a great opportunity to sharpen my programming skills and to put my heart and soul into my work. What makes these projects extra special is the collaboration with fellow students during my studies. We shared a passion for what we were doing, and working together brought out the best in all of us.",
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
