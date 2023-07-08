import { createContext } from "react";
import { StaticImageData } from "next/image";

export type DataContextProps = {
  introText: {
    h1: string;
    h2: string;
    h3: string;
    p1: string;
    p2: string;
  };
  cardsData: [
    {
      id: number;
      appTitle: string;
      appType: string;
      appDescription: string;
      techSpecs: string[];
      githubLink: string;
      img: StaticImageData;
      externalLink?: string;
    }
  ];
};

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);
