import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./ProjectsText.module.scss";
import Cards from "@/components/projects/cards/Cards";
import { DataContext } from "@/context/DataContext";

const ProjectsText = () => {
  const { projectsText } = useContext(DataContext);
  const projectsRef = useRef<null | HTMLElement>(null);

  return (
    <>
      <motion.section
        ref={projectsRef}
        id={"projects"}
        className={styles.projectsTextContainer}
      >
        <h2 className={styles.header2}>projects</h2>
        <p>{projectsText.p1}</p>
        <Cards />
      </motion.section>
    </>
  );
};

export default ProjectsText;
