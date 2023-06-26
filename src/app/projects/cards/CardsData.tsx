import React from "react";
import retroGameMarket from "../../../../public/images/retro-game.png";
import tidsreisenImg from "../../../../public/images/tidsreisenImage.png";
import reversedImageSearchImg from "../../../../public/images/reversedImageSearchImage.png";
import pizzaPortalImg from "../../../../public/images/pizza-portal.png";

const cardsData = [
  {
    id: 0,
    appTitle: "Retro Game Market",
    appType: "HYBRID APP",
    img: retroGameMarket,
    github: "https://github.com/runejac/TDS200_h22_exam",
    techSpecs: ["Vue.js", "Ionic", "Directus", "GraphQL", "Mapbox.js"],
    content:
      "The ultimate destination for retro games collections. With a vast selection of used, new, and mint condition games, there's something for every type of gamer. Plus, an interactive map feature helps you connect with sellers near you.",
  },
  {
    id: 1,
    appTitle: "Reversed Image Search",
    appType: "ANDROID APP",
    img: reversedImageSearchImg,
    github: "https://github.com/runejac/PGR208_EXAM_Reversed_Image_Search",
    techSpecs: ["Kotlin", "SQLite"],
    content:
      "On a Android phone, you can either take a photo with the camera or choose an existing image from the phone's storage as input and the app will return results related to the image.",
  },
  {
    id: 2,
    appTitle: "Byåa Tidsreisen",
    appType: "WEB APP",
    img: tidsreisenImg,
    github: "https://github.com/runejac/PRO201_EXAM_Tidsreisen_Byaaa",
    externalLink: "https://tidsreisen.herokuapp.com/",
    techSpecs: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mapbox.js",
      "Heroku PaaS",
    ],
    content:
      "A web app requested by Rælingen municipality for primary school pupils. With the intention of learning what a " +
      "cultural trail was and looked like 350 years ago. GPS tracking and QR scanning is two of the main features of this application.",
    downAtPaaS: "Down due to Heroku's change in pricing plan.",
  },
  {
    id: 3,
    appTitle: "Gylne Pizza",
    appType: "WEB APP",
    img: pizzaPortalImg,
    github:
      "https://github.com/runejac/runejac.github.io/tree/main/WebprosjektSolution",
    externalLink: "https://runejac.github.io/WebprosjektSolution/index.html",
    techSpecs: ["JavaScript", "Bulma", "Google charts"],
    content:
      "A portal for the management of a company, to have an overview of turnover, best selling items, manage employees, restaurants and their menus.",
  },
];

export default cardsData;
