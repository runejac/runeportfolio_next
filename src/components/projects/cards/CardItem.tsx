import React from "react";
import styles from "./CardItem.module.scss";
import stylesBlob from "../../imageOfMe/blob/Blob.module.scss";
import { motion, useInView } from "framer-motion";
import { BlobCard } from "@/components/imageOfMe/blob/BlobCard";
import cardsData from "@/components/projects/cards/CardsData";
import { ProjectsTextProps } from "@/components/projects/ProjectsText";

export let indexClicked: number;

const CardItem = ({
  openModal,
  projectsRef,
  amountNumberFromScreenWidth,
}: ProjectsTextProps) => {
  const isInView = useInView(projectsRef, {
    amount: amountNumberFromScreenWidth,
    once: true,
  });

  const handleClick = (index: number) => {
    const headerTag = document.querySelector(
      "#header-tag"
    ) as HTMLElement | null;

    if (headerTag) {
      headerTag.style.position = "relative";
    }
    indexClicked = index;

    // Adding correct modal clicked on to GA
    cardsData.forEach((projectName) => {
      if (projectName.id === indexClicked) {
        //gaEventTracker(projectName.appTitle);
      }
    });
  };

  // not getting triggered before isInView is true
  const showOneByOneAnimation = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
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
            className={styles.card}
            variants={showOneByOneAnimation}
            initial={"hidden"}
            animate={isInView ? "show" : ""}
            custom={index}
          >
            <BlobCard
              svgClassName={stylesBlob.svgBlobCard}
              pathClassName={stylesBlob.pathBlobCard}
            />
            <div>
              <div className={styles.circularBorder}>
                <h2>{cardItem.appTitle}</h2>
              </div>
            </div>
            <div className={styles.technologiesContainer}>
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
