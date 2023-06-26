import React from "react";
import "./cards.scss";
import CardItem from "./CardItem.jsx";
import { motion, useInView } from "framer-motion";
import { loadStylingMotion } from "@/utils/utils";

const Cards = ({ openModal, projectsRef, amountNumberFromScreenWidth }) => {
  const isInView = useInView(projectsRef, {
    amount: amountNumberFromScreenWidth,
    once: true,
  });

  return (
    <motion.section
      className={"cards-container"}
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
