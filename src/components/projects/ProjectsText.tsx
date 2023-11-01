import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./ProjectsText.module.scss";
import { loadStylingMotion } from "@/utils/utils";
import Cards from "@/components/projects/cards/Cards";
import { BiDownArrow } from "react-icons/bi";

export type ProjectsTextProps = {
  projectsRef: React.MutableRefObject<HTMLElement | null>;
  openModal: () => void;
  amountNumberFromScreenWidth: number;
  isVisible?: boolean;
};

const ProjectsText = ({
  projectsRef,
  openModal,
  amountNumberFromScreenWidth,
}: ProjectsTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOnSmallerFormat, setIsOnSmallerFormat] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsOnSmallerFormat(window.innerWidth < 1200);
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: isOnSmallerFormat ? 0 : 0.6 } // Trigger when the section is fully visible
    );
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, [isOnSmallerFormat]);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  useEffect(() => {
    controls.start("hidden");
  }, []);

  const sectionAnimation = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const arrowIconAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 4.8,
      },
    },
  };

  return (
    <>
      {!isVisible && (
        <motion.div
          className={styles.iconScrollContainer}
          variants={arrowIconAnimation}
          initial={"hidden"}
          animate={"show"}
        >
          <BiDownArrow className={styles.scrollIcon} />
        </motion.div>
      )}
      <motion.section
        ref={projectsRef}
        id={"projects"}
        animate={controls}
        variants={sectionAnimation}
        className={styles.projectsTextContainer}
        style={loadStylingMotion(isVisible, 0.1)}
      >
        <h2 style={loadStylingMotion(isVisible, 0.15)}>
          <span className={styles.sectionHeading}>01. </span> Projects
        </h2>

        <p style={loadStylingMotion(isVisible, 0.2)}>
          Highlighted below are projects I've had the privilege of developing.
          These endeavors not only honed my programming and development skills
          but also stand testament to my dedication and craft. I'm especially
          proud of these collaborations, each borne out of shared passion and
          synergy with fellow students during my academic journey.
        </p>
        <Cards
          isVisible={isVisible}
          amountNumberFromScreenWidth={amountNumberFromScreenWidth}
          projectsRef={projectsRef}
          openModal={openModal}
        />
      </motion.section>
    </>
  );
};
export default ProjectsText;
