import styles from "./IntroText.module.scss";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";

const IntroText = () => {
  const data = useContext(DataContext);
  const { h1 } = data.introText;

  return (
    <section className={styles.introTextContainer}>
      <div className={styles.introTextBox}>
        <div>
          <h1>{h1}</h1>
        </div>
        <div>
          <h2>developer</h2>
        </div>
        <div>
          <h3>
            Frontend-focused fullstack developer based in Oslo. <br />
            Fly fishing and brazilian jiu-jitsu is my jam.
          </h3>
        </div>
      </div>
      <div className={styles.awesomeContent}>
        <p>🪄awesome content missing🪄</p>
      </div>
    </section>
  );
};

export default IntroText;
