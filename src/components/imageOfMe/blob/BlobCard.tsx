type BlobCardProps = {
  svgClassName: string;
  cardNumber: number;
};

export const BlobCard = ({ svgClassName, cardNumber }: BlobCardProps) => {
  //todo try grainy gradient on card: https://css-tricks.com/grainy-gradients/
  return (
    <>
      {/*<svg
      className={svgClassName}
      viewBox="0 0 500 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={"myGradient"}>
          <stop offset="10%" stopColor={"#000"} />
          <stop offset="100%" stopColor={"var(--blue)"} />
        </radialGradient>
      </defs>

      <path
        className={pathClassName}
        d="M192.1,-148.2C230,-105.8,228.6,-27,204.4,33.7C180.2,94.3,133.3,136.8,77.7,165C22.1,193.1,-42.1,206.9,-94.5,185.7C-146.9,164.5,-187.5,108.3,-201.7,46C-215.9,-16.2,-203.7,-84.5,-165.7,-127C-127.7,-169.5,-63.8,-186.3,6.6,-191.6C77.1,-196.9,154.3,-190.7,192.1,-148.2Z"
      />
    </svg>*/}
      <svg
        className={svgClassName}
        viewBox="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </>
  );
};
