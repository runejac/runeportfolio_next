import React from "react";
import { useInView } from "framer-motion";
import "./projectsText.scss";
import Cards from "./cards/Cards.jsx";
import { loadStylingMotion } from "@/utils/utils";

const ProjectsText = ({
  projectsRef,
  openModal,
  amountNumberFromScreenWidth,
}) => {
  const isInView = useInView(projectsRef, {
    amount: amountNumberFromScreenWidth,
    once: true,
  });

  return (
    <section
      ref={projectsRef}
      id={"projects"}
      className={"projects-text-container"}
      style={loadStylingMotion(isInView, 0)}
    >
      <h2 style={loadStylingMotion(isInView, 0.1)}>
        <span className={"section-heading"}>01. </span> Projects
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
