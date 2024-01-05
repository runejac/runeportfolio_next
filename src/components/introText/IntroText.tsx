import styles from "./IntroText.module.scss";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";
import EasterEgg from "@/components/easterEgg/EasterEgg";

const IntroText = () => {
  const data = useContext(DataContext);
  const { h1 } = data.introText;

  return (
    <section className={styles.introTextContainer}>
      <div className={styles.introTextBox}>
        <div>
          <h1>{h1}</h1>
        </div>
        <div className={styles.special}>
          <h2>developer</h2>
        </div>
        <div>
          <h3>
            Front-end Engineer based in Oslo, coding for the media industry
            <br />
            {/*Fly fishing and brazilian jiu-jitsu is my jam.*/}
          </h3>
        </div>
      </div>
      <div className={styles.awesomeContent}>
        <EasterEgg />
      </div>
    </section>
  );
};

export default IntroText;
