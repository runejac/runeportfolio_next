import React from "react";
import { useInView } from "framer-motion";
import styles from "./ProjectsText.module.scss";
import { loadStylingMotion } from "@/utils/utils";
import Cards from "@/components/projects/cards/Cards";

export type ProjectsTextProps = {
  projectsRef: React.MutableRefObject<HTMLDivElement | null>;
  openModal: () => void;
  amountNumberFromScreenWidth: number;
};

const ProjectsText = ({
  projectsRef,
  openModal,
  amountNumberFromScreenWidth,
}: ProjectsTextProps) => {
  const isInView = useInView(projectsRef, {
    amount: amountNumberFromScreenWidth,
    once: true,
  });
  return (
    <section
      ref={projectsRef}
      id={"projects"}
      className={styles.projectsTextContainer}
      style={loadStylingMotion(isInView, 0)}
    >
      <h2 style={loadStylingMotion(isInView, 0.1)}>
        <span className={styles.sectionHeading}>01. </span> Projects
      </h2>

      <p style={loadStylingMotion(isInView, 0.2)}>
        These are some of the projects and exams I have been involved in
        building, which have given me solid experience and knowledge in
        programming and development. These are also the ones I am most proud of
        and have been involved in creating, with other like-minded students I
        have met in my studies.
      </p>
      <Cards
        amountNumberFromScreenWidth={amountNumberFromScreenWidth}
        projectsRef={projectsRef}
        openModal={openModal}
      />
    </section>
  );
};
export default ProjectsText;
