import React from "react";
import styles from "./Background.module.scss";

const Background = () => {
  return (
    <svg
      className={styles.background}
      viewBox="0 0 100 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="100"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
};

export default Background;
