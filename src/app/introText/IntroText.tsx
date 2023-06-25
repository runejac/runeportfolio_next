"use client";
import { motion } from "framer-motion";
import "./introText.scss";

const IntroText = () => {
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
    showhp2: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 4.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section className={"intro-text-container"}>
      <motion.div>
        <h1>Hi, my name is</h1>
      </motion.div>
      <motion.div
        variants={nameOpacityAnimation}
        initial={"hidden"}
        animate={"showh2"}
      >
        <h2>Rune Oliveira.</h2>
      </motion.div>
      <motion.div
        variants={itemsOpacityAnimation}
        initial={"hidden"}
        animate={"showh3"}
      >
        <h3>Information technology student</h3>
      </motion.div>
      <motion.div
        variants={itemsOpacityAnimation}
        initial={"hidden"}
        animate={"showhp1"}
      >
        <p>
          I'm currently in my final year of my bachelor's degree in IT. I like
          to learn new technologies, I love great teamwork and I am fond of good
          user experiences.
        </p>
      </motion.div>
      <motion.div
        variants={itemsOpacityAnimation}
        initial={"hidden"}
        animate={"showhp2"}
        className={"last-p-div"}
      >
        <p>
          During my experience, I have enjoyed working with Vue.js, TypeScript,
          .NET and developing on mobile platforms with SwiftUI.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default IntroText;
