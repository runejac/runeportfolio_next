import React from "react";
import styles from "./Cards.module.scss";
import { motion } from "framer-motion";
import CardItem from "@/components/projects/cards/CardItem";

const Cards = () => {
  return (
    <motion.section className={styles.cardsContainer}>
      <CardItem />
    </motion.section>
  );
};

export default Cards;
