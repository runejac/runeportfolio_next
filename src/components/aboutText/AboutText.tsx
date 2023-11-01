import styles from "./AboutText.module.scss";
import { motion, useAnimation } from "framer-motion";
import { BiDownArrow } from "react-icons/bi";
import { loadStylingMotion } from "@/utils/utils";
import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "@/context/DataContext";

const AboutText = () => {
  const { aboutText2 } = useContext(DataContext);

  const aboutSectionRef = useRef<null | HTMLElement>(null);
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
  }, []);

  const sectionAnimation = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const latelyTechnologiesWorkedWith = [
    "Vue",
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
        variants={sectionAnimation}
        className={styles.aboutAndImgContainer}
        style={loadStylingMotion(isVisible, 0.1)}
      >
        <div className={styles.aboutMeContainer}>
          <h2 style={loadStylingMotion(isVisible, 0.15)}>
            <span>00.</span> About
          </h2>
          <p style={loadStylingMotion(isVisible, 0.2)}>{aboutText2.p1}</p>
          <p style={loadStylingMotion(isVisible, 0.3)}>{aboutText2.p2}</p>
          <p style={loadStylingMotion(isVisible, 0.3)}>{aboutText2.p3}</p>
          <div>
            <div>
              <p style={loadStylingMotion(isVisible, 0.35)}>
                Technologies I have been working with lately:
              </p>
              <ul
                style={loadStylingMotion(isVisible, 0.4)}
                className={styles.skillsList}
              >
                {latelyTechnologiesWorkedWith &&
                  latelyTechnologiesWorkedWith.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutText;
