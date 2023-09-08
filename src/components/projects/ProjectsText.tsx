import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./ProjectsText.module.scss";
import { loadStylingMotion } from "@/utils/utils";
import Cards from "@/components/projects/cards/Cards";

export type ProjectsTextProps = {
  projectsRef: React.MutableRefObject<HTMLElement | null>;
  openModal: () => void;
  amountNumberFromScreenWidth: number;
  isVisible: boolean;
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

  return (
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
        These are some of the projects and exams I have been involved in
        building, which have given me solid experience and knowledge in
        programming and development. These are also the ones I am most proud of
        and have been involved in creating, with other like-minded students I
        have met in my studies.
      </p>
      <Cards
        isVisible={isVisible}
        amountNumberFromScreenWidth={amountNumberFromScreenWidth}
        projectsRef={projectsRef}
        openModal={openModal}
      />
    </motion.section>
  );
};
export default ProjectsText;
