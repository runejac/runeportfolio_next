import React from "react";
import styles from "./Cards.module.scss";
import { motion } from "framer-motion";
import CardItem from "@/components/projects/cards/CardItem";

export type CardsProps = {
  openModal: () => void;
};
const Cards = ({ openModal }: CardsProps) => {
  return (
    <motion.section className={styles.cardsContainer}>
      <CardItem openModal={openModal} />
    </motion.section>
  );
};

export default Cards;
