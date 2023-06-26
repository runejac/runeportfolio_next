import React from "react";
import "./footer.scss";
import { BsLinkedin } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className={"social-media-container"}>
        <ul className={"footer-ul"}>
          <li>
            <a
              href="https://www.linkedin.com/in/rune-daniel-jacobsen-oliveira/"
              target={"_blank"}
              rel={"noopener noreferrer"}
              aria-label={"open linkedin profile"}
            >
              <BsLinkedin id={"linkedin-icon"} className={"icon-link"} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/runejac"
              target={"_blank"}
              rel={"noopener noreferrer"}
              aria-label={"open github profile"}
            >
              <FiGithub id={"github-icon"} className={"icon-link"} />
            </a>
          </li>
        </ul>
      </div>
      <div className={"designed-by-container"}>
        <a
          href="https://github.com/runejac/RunePortfolio"
          target={"_blank"}
          rel={"noopener noreferrer"}
          aria-label={"open this website's github source code"}
        >
          Designed & Built by Rune Oliveira
        </a>
      </div>
      <div className={"copyright-container"}>
        <p>© {new Date().getFullYear()} - Rune Oliveira</p>
      </div>
    </footer>
  );
};

export default Footer;
