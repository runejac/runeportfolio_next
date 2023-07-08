import styles from "./AboutText.module.scss";
import { motion, useInView } from "framer-motion";
import { BiDownArrow } from "react-icons/bi";
import ImageOfRune from "@/components/imageOfMe/ImageOfMe";
import { loadStylingMotion } from "@/utils/utils";

type AboutTextProps = {
  aboutRef: React.MutableRefObject<null | HTMLDivElement>;
};
const AboutText = ({ aboutRef }: AboutTextProps) => {
  const isInView = useInView(aboutRef, {
    once: true,
  });

  const arrowIconAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 4.8,
      },
    },
  };

  const skills = [".NET", "TypeScript", "Vue.js", "Swift", "Ionic", "GraphQL"];

  //const skillsInProgress = ["C#", ".NET", "Swift", "TypeScript", "Vue", "Ionic"];

  return (
    <>
      {!isInView && (
        <motion.div
          className={styles.iconScrollContainer}
          variants={arrowIconAnimation}
          initial={"hidden"}
          animate={"show"}
        >
          <BiDownArrow className={styles.scrollIcon} />
        </motion.div>
      )}
      <motion.section
        id={"about"}
        ref={aboutRef}
        className={styles.aboutAndImgContainer}
        style={loadStylingMotion(isInView, 0.8)}
      >
        <div className={styles.aboutMeContainer}>
          <h2 style={loadStylingMotion(isInView, 0.9)}>
            <span>00.</span> About
          </h2>
          <p style={loadStylingMotion(isInView, 1)}>
            After several years in various positions in an e-commerce company, I
            realized that I wanted to learn something completely new. I wanted
            to be able to create things from scratch and get the feeling of
            mastery. I had to think about what I really wanted to do, which
            field of specialization I was going to take a deep dive into, and at
            the same time remind myself where my roots originate from. After
            some consultation and research, I landed on the decision that I
            wanted to learn how to code, how to make things from scratch on
            behalf of the customer&apos;s requirements. To achieve that I had to
            leave my comfort zone and move to another city. I find programming
            an attractive industry with interesting people. I took the plunge. I
            signed up for for a bachelor&apos;s degree at a college in Oslo and
            moved there.
          </p>
          <p style={loadStylingMotion(isInView, 1.1)}>
            It became programming, with special fields in{" "}
            <a
              href={
                "https://www.kristiania.no/studier/bachelor/informasjonsteknologi-frontend-og-mobilutvikling/"
              }
              target={"_blank"}
              aria-label={"open course link"}
            >
              frontend and mobile development
            </a>
            {". "} Front end and mobile development suits me very well. I have
            not looked back once, and I am glad I made that choice. It has
            turned out to be one of the most important choices in my life, one
            that will shape my future. It is never too late to choose a new
            profession or learn a new skill. The teamwork that is required in a
            development process is priceless, the people surrounding you with
            feedback and knowledge are in center of making a great product,
            I&apos;ve learned. On a individual level; what is more important
            than anything else is to never stop growing and learning, especially
            from others that has already made up the wheel.
          </p>
          <div>
            <div>
              <p style={loadStylingMotion(isInView, 1.2)}>
                Technologies I have been working with lately:
              </p>
              <ul
                style={loadStylingMotion(isInView, 1.3)}
                className={styles.skillsList}
              >
                {skills &&
                  skills.map((skill, index) => <li key={index}>{skill}</li>)}
              </ul>
            </div>
          </div>
        </div>
        {/*<div className={styles.imgContainer}>
          <ImageOfRune isInView={isInView} />
        </div>*/}
      </motion.section>
    </>
  );
};

export default AboutText;
