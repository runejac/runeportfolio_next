import React, { useContext, useEffect, useState } from "react";
import styles from "./CardItem.module.scss";
import stylesBlob from "../../imageOfMe/blob/Blob.module.scss";
import { motion } from "framer-motion";
import { BlobCard } from "@/components/imageOfMe/blob/BlobCard";
import { ProjectsTextProps } from "@/components/projects/ProjectsText";
import { DataContext } from "@/context/DataContext";
import Image from "next/image";
import { windowScroll } from "seamless-scroll-polyfill";

export let indexClicked: number;

const CardItem = ({ openModal, projectsRef }: ProjectsTextProps) => {
  const data = useContext(DataContext);
  const [isOnSmallDevice, setIsOnSmallDevice] = useState(false);
  const [hoveredCards, setHoveredCards] = useState(
    Array(data.cardsData.length).fill(false)
  );

  useEffect(() => {
    if (window.innerWidth > 800) setIsOnSmallDevice(false);
    else if (window.innerWidth <= 799) setIsOnSmallDevice(true);
  }, [isOnSmallDevice]);

  const toggleHover = (index: number) => {
    const updatedHoveredCards = [...hoveredCards];
    updatedHoveredCards[index] = !updatedHoveredCards[index];
    setHoveredCards(updatedHoveredCards);
  };

  const handleClick = (index: number) => {
    const headerTag = document.querySelector(
      "#header-tag"
    ) as HTMLElement | null;

    if (headerTag) {
      headerTag.style.position = "relative";
    }
    indexClicked = index;
  };

  const setCardColor = (index: number) => {
    let cardColorClass = "";
    switch (index) {
      case 0:
        cardColorClass = stylesBlob.card0;
        break;
      case 1:
        cardColorClass = stylesBlob.card1;
        break;
      case 2:
        cardColorClass = stylesBlob.card2;
        break;
      case 3:
        cardColorClass = stylesBlob.card3;
        break;
    }

    return cardColorClass;
  };

  return (
    <>
      {data.cardsData.map((cardItem, index) => {
        return (
          <motion.article
            onMouseEnter={() => toggleHover(index)}
            onFocus={() => toggleHover(index)}
            onBlur={() => setHoveredCards([])}
            onMouseLeave={() => setHoveredCards([])}
            onClick={() => {
              openModal();
              handleClick(index);
            }}
            onKeyDown={(event) => {
              event.key === "Enter" && openModal();
              handleClick(index);
            }}
            title={`Click to open ${cardItem.appTitle} project window`}
            aria-label={`Click to open ${cardItem.appTitle} project window`}
            tabIndex={0}
            role={"button"}
            key={index}
            className={styles.card}
            custom={index}
          >
            <BlobCard
              svgClassName={`${stylesBlob.svgBlobCard} ${setCardColor(index)} `}
              cardNumber={index}
            />
            {isOnSmallDevice && (
              <Image
                className={styles.modalImg}
                src={cardItem.img}
                alt="image of app"
              />
            )}
            {hoveredCards[index] && (
              <Image
                className={styles.modalImg}
                src={cardItem.img}
                alt="image of app"
              />
            )}
            <div className={styles.circularBorder}>
              <h2>{cardItem.appTitle}</h2>
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
