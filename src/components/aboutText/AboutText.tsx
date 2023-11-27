import styles from "./AboutText.module.scss";
import { useContext, useRef } from "react";
import { DataContext } from "@/context/DataContext";

const AboutText = () => {
  const { aboutText } = useContext(DataContext);
  const aboutSectionRef = useRef<null | HTMLElement>(null);

  const latelyTechnologiesWorkedWith = [
    {
      name: "React.js",
      link: "https://react.dev/",
    },
    {
      name: "Vue.js",
      link: "https://vuejs.org/",
    },
    {
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Jetpack Compose",
      link: "https://developer.android.com/jetpack/compose",
    },
    {
      name: "Kotlin",
      link: "https://kotlinlang.org/",
    },
  ];

  return (
    <>
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
                  <a key={index} href={skill.link} target={"_blank"}>
                    {skill.name}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutText;
