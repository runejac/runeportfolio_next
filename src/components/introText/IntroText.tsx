import { motion } from "framer-motion";
import styles from "./IntroText.module.scss";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";

const IntroText = () => {
  const data = useContext(DataContext);
  const { h1, h2, h3, p1 } = data.introText;

  const nameOpacityAnimation = {
    hidden: { opacity: 0 },
    showh2: {
      opacity: 1,
      transition: {
        delay: 2.01,
      },
    },
  };

  const itemsOpacityAnimation = {
    hidden: { y: 20, opacity: 0 },
    showh1: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        ease: "easeOut",
      },
    },
    showh3: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 4.2,
        ease: "easeOut",
      },
    },
    showhp1: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 4.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section className={styles.introTextContainer}>
      <motion.div>
        <h1>{h1}</h1>
      </motion.div>
      <motion.div
        variants={nameOpacityAnimation}
        initial={"hidden"}
        animate={"showh2"}
      >
        <h2>{h2}</h2>
      </motion.div>
      <motion.div
        variants={itemsOpacityAnimation}
        initial={"hidden"}
        animate={"showh3"}
      >
        <h3>{h3}</h3>
      </motion.div>
      <motion.div
        variants={itemsOpacityAnimation}
        initial={"hidden"}
        animate={"showhp1"}
      >
        <p>{p1}</p>
      </motion.div>
    </motion.section>
  );
};

export default IntroText;
