import React from "react";
import styles from "./Footer.module.scss";
import { BsLinkedin } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.socialMediaContainer}>
          <ul className={styles.footerUl}>
            <li>
              <Link
                href="https://www.linkedin.com/in/rune-daniel-jacobsen-oliveira/"
                target={"_blank"}
                rel={"noopener noreferrer"}
                aria-label={"open linkedin profile"}
              >
                <BsLinkedin
                  className={`${styles.iconLink} ${styles.linkedin}`}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/runejac"
                target={"_blank"}
                rel={"noopener noreferrer"}
                aria-label={"open github profile"}
              >
                <FiGithub
                  className={`${styles.iconLink} ${styles.githubLink}`}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.designedByContainer}>
          <a
            href="https://github.com/runejac/runeportfolio_next"
            target={"_blank"}
            rel={"noopener noreferrer"}
            aria-label={"open this website's github source code"}
          >
            Designed & built by Rune Oliveira
          </a>
        </div>
        <div className={styles.copyrightContainer}>
          <p>© {new Date().getFullYear()} - Rune Oliveira</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
