import styles from "./AboutText.module.scss";
import { motion, useAnimation } from "framer-motion";
import { BiDownArrow } from "react-icons/bi";
import { loadStylingMotion } from "@/utils/utils";
import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "@/context/DataContext";

const AboutText = () => {
  const aboutSectionRef = useRef<null | HTMLElement>(null);
  const [isOnSmallerFormat, setIsOnSmallerFormat] = useState(false);
  const controls = useAnimation();
  const { aboutText } = useContext(DataContext);

  /*  useEffect(() => {
			setIsOnSmallerFormat(window.innerWidth < 1200);
			const observer = new IntersectionObserver(
				([entry]) => {
					setIsVisible(entry.isIntersecting);
				},
				{ threshold: isOnSmallerFormat ? 0 : 0.6 } // Trigger when the section is fully visible
			);
			if (aboutSectionRef.current) {
				observer.observe(aboutSectionRef.current);
			}

			return () => {
				if (aboutSectionRef.current) {
					observer.unobserve(aboutSectionRef.current);
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
		}, []);*/

  /*  const sectionAnimation = {
			visible: { opacity: 1 },
			hidden: { opacity: 0 },
		};*/

  const latelyTechnologiesWorkedWith = [
    "Vue.js",
    "ASP.NET",
    "C#",
    "TypeScript",
    "Next.js",
    "SCSS",
  ];

  return (
    <>
      <motion.section
        id={"about"}
        ref={aboutSectionRef}
        animate={controls}
        /*variants={sectionAnimation}*/
        className={styles.aboutAndImgContainer}
        /*  style={loadStylingMotion(isVisible, 0.1)}*/
      >
        <div className={styles.aboutMeContainer}>
          <h2
          /*style={loadStylingMotion(isVisible, 0.15)}*/
          >
            About
          </h2>
          <p
          /*style={loadStylingMotion(isVisible, 0.2)}*/
          >
            {aboutText.p1}
          </p>
          <p
          /*
																																				style={loadStylingMotion(isVisible, 0.3)}
																														*/
          >
            I'm deeply engaged in programming, with a particular focus on{" "}
            <a
              href={
                "https://www.kristiania.no/studier/bachelor/informasjonsteknologi-frontend-og-mobilutvikling/"
              }
              target={"_blank"}
              aria-label={"open course link"}
            >
              {"{"}frontend and mobile development{"}"}
            </a>
            {", "}
            {aboutText.p2}
          </p>
          <p>{aboutText.p3}</p>
          <div className={styles.skillsListContainer}>
            <p
            /* style={loadStylingMotion(isVisible, 0.35)}*/
            >
              Technologies I have been working with lately:
            </p>
            <div
              /*style={loadStylingMotion(isVisible, 0.4)}*/
              className={styles.skillsList}
            >
              {latelyTechnologiesWorkedWith &&
                latelyTechnologiesWorkedWith.map((skill, index) => (
                  <a key={index} href="">
                    {skill}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutText;
