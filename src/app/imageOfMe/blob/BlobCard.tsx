"use client";

type BlobCardProps = {
  svgClassName: string;
  pathClassName: string;
};

export const BlobCard = ({ svgClassName, pathClassName }: BlobCardProps) => {
  //todo try grainy gradient on card: https://css-tricks.com/grainy-gradients/
  return (
    <svg
      className={svgClassName}
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={"myGradient"}>
          <stop offset="65%" stopColor={"#000"} />
          <stop offset="100%" stopColor={"var(--purple)"} />
        </radialGradient>
      </defs>
      <path
        className={pathClassName}
        d="M192.1,-148.2C230,-105.8,228.6,-27,204.4,33.7C180.2,94.3,133.3,136.8,77.7,165C22.1,193.1,-42.1,206.9,-94.5,185.7C-146.9,164.5,-187.5,108.3,-201.7,46C-215.9,-16.2,-203.7,-84.5,-165.7,-127C-127.7,-169.5,-63.8,-186.3,6.6,-191.6C77.1,-196.9,154.3,-190.7,192.1,-148.2Z"
      />
    </svg>
  );
};

export const BlobImg = ({ svgClassName, pathClassName }: BlobCardProps) => {
  return (
    <svg className={svgClassName} viewBox="0 0 578 610">
      <path
        className={pathClassName}
        d="M254.159 2.21623C302.455 -7.57477 343.022 37.4059 389.37 54.1446C452.165 76.8232 556.671 53.8303 574.908 118.056C594.551 187.235 478.121 224.893 457.407 293.759C441.553 346.467 499.413 406.085 473.641 454.719C448.098 502.92 381.79 507.522 332.146 530.135C273.477 556.859 207.083 638.569 155.807 599.492C94.3738 552.673 153.309 447.053 127.57 374.227C114.767 338.003 66.1774 327.988 47.9056 294.191C23.9503 249.882 -16.3903 196.25 7.3239 151.811C31.514 106.48 106.178 129.279 150.12 102.648C192.194 77.1489 205.942 11.9914 254.159 2.21623Z"
      />
    </svg>
  );
};
