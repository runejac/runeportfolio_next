type BlobCardProps = {
  svgClassName: string;
  cardNumber: number;
};

export const BlobCard = ({ svgClassName, cardNumber }: BlobCardProps) => {
  //todo try grainy gradient on card: https://css-tricks.com/grainy-gradients/
  return (
    <>
      <svg
        className={svgClassName}
        viewBox="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </>
  );
};
