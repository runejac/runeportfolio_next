import React from "react";
import styles from "./Cards.module.scss";
import CardItem from "./CardItem.tsx";
import { motion, useInView } from "framer-motion";
import { loadStylingMotion } from "src/utils/utils";

const Cards = ({ openModal, projectsRef, amountNumberFromScreenWidth }) => {
  const isInView = useInView(projectsRef, {
    amount: amountNumberFromScreenWidth,
    once: true,
  });

  return (
    <motion.section
      className={styles.cardsContainer}
      style={loadStylingMotion(isInView, 0.2)}
    >
      <CardItem
        projectsRef={projectsRef}
        amountNumberFromScreenWidth={amountNumberFromScreenWidth}
        openModal={openModal}
      />
    </motion.section>
  );
};

export default Cards;
