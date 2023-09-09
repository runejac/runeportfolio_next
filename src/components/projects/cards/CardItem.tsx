import React, {useContext, useState} from "react";
import styles from "./CardItem.module.scss";
import stylesBlob from "../../imageOfMe/blob/Blob.module.scss";
import {motion, useInView} from "framer-motion";
import {BlobCard} from "@/components/imageOfMe/blob/BlobCard";
import {ProjectsTextProps} from "@/components/projects/ProjectsText";
import {DataContext} from "@/context/DataContext";
import Image from "next/image";

export let indexClicked: number;

const CardItem = ({
	                  openModal,
	                  projectsRef,
	                  amountNumberFromScreenWidth,
	                  isVisible,
                  }: ProjectsTextProps) => {
	const data = useContext(DataContext);
	const [hoveredCards, setHoveredCards] = useState(Array(data.cardsData.length).fill(false));

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

		// Adding correct modal clicked on to GA
		data.cardsData.forEach((projectName) => {
			if (projectName.id === indexClicked) {
				//gaEventTracker(projectName.appTitle);
			}
		});
	};

	// not getting triggered before isInView is true
	const showOneByOneAnimation = {
		hidden: {opacity: 0},
		show: (i: number) => ({
			opacity: 1,
			transition: {
				delay: i * 0.3,
			},
		}),
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
						onMouseLeave={() => toggleHover(index)}
						onClick={() => {
							openModal();
							handleClick(index);
						}}
						aria-label={"open project details window"}
						key={index}
						className={styles.card}
						variants={showOneByOneAnimation}
						initial={"hidden"}
						animate={isVisible ? "show" : ""}
						custom={index}
					>
						<BlobCard
							svgClassName={`${stylesBlob.svgBlobCard} ${setCardColor(index)} `}
							cardNumber={index}
						/>
						<Image
							className={`${styles.modalImg} ${hoveredCards[index] ? styles.hoverCardScaleImg : ""}`}
							src={cardItem.img}
							alt="image of app"
						/>
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
