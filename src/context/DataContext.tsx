import { createContext } from "react";

export type DataContextProps = {
  introText: {
    h1: string;
    h2: string;
    h3: string;
    p1: string;
    p2: string;
  };
};

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);
