import React from "react";
import styles from "./Cards.module.scss";
import { motion, useInView } from "framer-motion";
import { loadStylingMotion } from "@/utils/utils";
import CardItem from "@/components/projects/cards/CardItem";
import { ProjectsTextProps } from "@/components/projects/ProjectsText";

const Cards = ({
  openModal,
  projectsRef
}: ProjectsTextProps) => {
  return (
    <motion.section className={styles.cardsContainer}>
      <CardItem
        projectsRef={projectsRef}
        openModal={openModal}
      />
    </motion.section>
  );
};

export default Cards;
