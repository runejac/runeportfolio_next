import React, { useContext } from "react";
import { motion } from "framer-motion";
import styles from "./ProjectsText.module.scss";


import Cards from "@/components/projects/cards/Cards";
import { DataContext } from "@/context/DataContext";

export type ProjectsTextProps = {
  projectsRef: React.MutableRefObject<HTMLElement | null>;
  openModal: () => void;
  isVisible?: boolean;
};
const ProjectsText = ({
  projectsRef,
  openModal
}: ProjectsTextProps) => {
  const data = useContext(DataContext);

  return (
    <>
      <motion.section
        ref={projectsRef}
        id={"projects"}
        className={styles.projectsTextContainer}
      >
        <h2>projects</h2>
        <p>{data.projectsText.p1}</p>
        <Cards
          projectsRef={projectsRef}
          openModal={openModal}
        />
      </motion.section>
    </>
  );
};

export default ProjectsText;
