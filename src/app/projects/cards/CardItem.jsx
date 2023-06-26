import React from "react";
import "./cardItem.scss";
import "../../imageOfMe/blob/blob.scss";
import cardsData from "./CardsData.tsx";
import { motion, useInView } from "framer-motion";
import { BlobCard } from "@/app/imageOfMe/blob/BlobCard";

export let indexClicked;

const handleClick = (index) => {
  document.querySelector("#header-tag").style.position = "relative";
  indexClicked = index;

  // Adding correct modal clicked on to GA
  cardsData.forEach((projectName) => {
    if (projectName.id === indexClicked) {
      //gaEventTracker(projectName.appTitle);
    }
  });
};

const CardItem = ({ openModal, projectsRef, amountNumberFromScreenWidth }) => {
  const isInView = useInView(projectsRef, {
    amount: amountNumberFromScreenWidth,
    once: true,
  });

  function handleMouseover(e) {
    document.querySelector(".active")?.classList.remove("active");
    e.target.closest(".card")?.classList.add("active");
  }

  document
    .querySelectorAll(".card")
    .forEach((card) => card.addEventListener("mouseover", handleMouseover));

  // not getting triggered before isInView is true
  const showOneByOneAnimation = {
    hidden: { opacity: 0 },
    show: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

  return (
    <>
      {cardsData.map((cardItem, index) => {
        return (
          <motion.article
            onClick={() => {
              openModal();
              handleClick(index);
            }}
            aria-label={"open project details window"}
            key={index}
            className={"card"}
            variants={showOneByOneAnimation}
            initial={"hidden"}
            animate={isInView ? "show" : ""}
            custom={index}
          >
            <BlobCard
              svgClassName={"svg-blob-card"}
              pathClassName={"path-blob-card"}
            />
            <div className="top-section">
              <div className="circular-border">
                <h2>{cardItem.appTitle}</h2>
              </div>
            </div>
            <div className={"technologies-container"}>
              <ul>
                {cardItem.techSpecs.map((spec, index) => {
                  return <li key={index}>{spec}</li>;
                })}
              </ul>
            </div>
          </motion.article>
        );
      })}
    </>
  );
};

export default CardItem;
