import React from "react";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <a
        className={styles.mainsiteLogo}
        href={"/"}
        aria-label={"home or refresh website"}
      >
        <svg
          className={styles.logo}
          width="287"
          height="291"
          viewBox="0 0 287 291"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_13_68)">
            <mask id="path-1-inside-1_13_68" fill="white">
              <rect y="4" width="257" height="257" rx="5" />
            </mask>
            <rect
              y="4"
              width="257"
              height="257"
              rx="5"
              fill="var(--yellow-background)"
            />
            <rect
              y="4"
              width="257"
              height="257"
              rx="5"
              stroke="black"
              strokeWidth="20"
              mask="url(#path-1-inside-1_13_68)"
            />
          </g>
          <path
            d="M88.25 50H129C143.167 50 153.5 53.3333 160 60C166.5 66.5 169.75 76.5833 169.75 90.25V101C169.75 119.167 163.75 130.667 151.75 135.5V136C158.417 138 163.083 142.083 165.75 148.25C168.583 154.417 170 162.667 170 173V203.75C170 208.75 170.167 212.833 170.5 216C170.833 219 171.667 222 173 225H145C144 222.167 143.333 219.5 143 217C142.667 214.5 142.5 210 142.5 203.5V171.5C142.5 163.5 141.167 157.917 138.5 154.75C136 151.583 131.583 150 125.25 150H115.75V225H88.25V50ZM125.75 125C131.25 125 135.333 123.583 138 120.75C140.833 117.917 142.25 113.167 142.25 106.5V93C142.25 86.6667 141.083 82.0833 138.75 79.25C136.583 76.4167 133.083 75 128.25 75H115.75V125H125.75Z"
            fill="black"
          />
          <defs>
            <filter
              id="filter0_d_13_68"
              x="0"
              y="4"
              width="287"
              height="287"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="30" dy="30" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_13_68"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_13_68"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </a>
    </div>
  );
};

export default Logo;
