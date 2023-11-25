import React, { useContext, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./ProjectsText.module.scss";

const ProjectsText = ({
  projectsRef,
  openModal,
  amountNumberFromScreenWidth
}: ProjectsTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOnSmallerFormat, setIsOnSmallerFormat] = useState(false);
  const controls = useAnimation();
  const data = useContext(DataContext);

  useEffect(() => {
    setIsOnSmallerFormat(window.innerWidth < 1200);
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: isOnSmallerFormat ? 0 : 0.6 } // Trigger when the section is fully visible
    );
    if (projectsRef.current) {
      observer.observe(projectsRef.current!);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current!);
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
    hidden: { opacity: 0 }
  };

  const arrowIconAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1
      }
    }
  };

  return (
    <>
      {/*{!isVisible && (
        <motion.div
          className={styles.iconScrollContainer}
          variants={arrowIconAnimation}
          initial={"hidden"}
          animate={"show"}
        >
          <BiDownArrow className={styles.scrollIcon} />
        </motion.div>
      )}*/}
      <motion.section
        ref={projectsRef}
        id={"projects"}
        className={styles.projectsTextContainer}
      >
        <h2>projects</h2>
        <p>{data.projectsText.p1}</p>
        <Cards
          amountNumberFromScreenWidth={amountNumberFromScreenWidth}
          projectsRef={projectsRef}
          openModal={openModal}
        />
      </motion.section>
    </>
  );
};

import Cards from "@/components/projects/cards/Cards";
import { BiDownArrow } from "react-icons/bi";
import { DataContext } from "@/context/DataContext";

export type ProjectsTextProps = {
  projectsRef: React.MutableRefObject<HTMLElement | null>;
  openModal: () => void;
  amountNumberFromScreenWidth: number;
  isVisible?: boolean;
};
export default ProjectsText;
