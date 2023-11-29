import { createContext } from "react";
import { StaticImageData } from "next/image";

export type DataContextProps = {
  introText: {
    h1: string;
    h2: string;
    p1: string;
    p2: string;
  };
  projectsText: {
    p1: string;
  };
  projectsData: [
    {
      id: number;
      appTitle: string;
      appType: string;
      appDescription: string;
      techSpecs: string[];
      githubLink: string;
      img: string;
      externalLink?: string;
    }
  ];
  aboutText: {
    p1: string;
    p2: string;
    p2a: string;
    p3: string;
  };
};

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);
