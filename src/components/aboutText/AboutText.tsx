import styles from "./AboutText.module.scss";
import { useContext, useRef } from "react";
import { DataContext } from "@/context/DataContext";

const AboutText = () => {
  const { aboutText } = useContext(DataContext);
  const aboutSectionRef = useRef<null | HTMLElement>(null);

  return (
    <section
      id={"about"}
      ref={aboutSectionRef}
      className={styles.aboutAndImgContainer}
    >
      <div className={styles.aboutMeContainer}>
        <h2>about</h2>
        <p>{aboutText.p1}</p>
        <p>
          {aboutText.p2}
          <a
            href={
              "https://www.kristiania.no/studier/bachelor/informasjonsteknologi-frontend-og-mobilutvikling/"
            }
            target={"_blank"}
            aria-label={"open course link"}
          >
            <span>frontend and mobile development</span>
          </a>
          {aboutText.p2a}
        </p>
        <p>{aboutText.p3}</p>
      </div>
    </section>
  );
};

export default AboutText;
