import React, { useState } from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
//import pdfFile from "../../../public/resume/CV_Oliveira.pdf";
import Link from "next/link";

const Navbar = ({ onClickAbout, onClickProjects }) => {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    return setSidebar(!sidebar);
  }

  // navbar load animation
  const navBarItemsMotion = {
    hidden: { opacity: 0 },
    show1: {
      opacity: 1,
      transition: {
        delay: 4.8,
      },
    },
    show2: {
      opacity: 1,
      transition: {
        delay: 4.9,
      },
    },
    show3: {
      opacity: 1,
      transition: {
        delay: 5,
      },
    },
    show4: {
      opacity: 1,
      transition: {
        delay: 5.1,
      },
    },
  };

  return (
    <>
      <motion.nav className={"navbar-container"}>
        <motion.ol className={"ol-nav"}>
          <Link href={"#"} aria-label={"about section"}>
            <motion.li
              variants={navBarItemsMotion}
              initial={"hidden"}
              animate={"show1"}
              className={"navbar-item"}
            >
              <span>00.</span> ABOUT
            </motion.li>
          </Link>
          <Link href={"#"} aria-label={"projects section"}>
            <motion.li
              variants={navBarItemsMotion}
              initial={"hidden"}
              animate={"show2"}
              className={"navbar-item"}
            >
              <span>01.</span> PROJECTS
            </motion.li>
          </Link>
          <Link
            href={"#"}
            aria-label={"mail me section"}
            onClick={(e) => {
              window.location.href = "mailto:runedanielj@gmail.com";
              e.preventDefault();
            }}
          >
            <motion.li
              variants={navBarItemsMotion}
              initial={"hidden"}
              animate={"show3"}
              className={"navbar-item"}
            >
              <span>02.</span> HIT ME UP
            </motion.li>
          </Link>
          {/*<a href={pdfFile} target={"_blank"} rel={"noopener noreferrer"}>
            <motion.li
              variants={navBarItemsMotion}
              initial={"hidden"}
              animate={"show4"}
              className={"navbar-item resume"}
            >
              Resume
            </motion.li>
          </a>*/}
        </motion.ol>
      </motion.nav>
      {sidebar && (
        <div
          onClick={() => {
            showSidebar();
          }}
          className={"background-sidebar"}
          aria-label={"background sidebar exit from menu"}
        />
      )}
      <aside className={"sidebar-container"}>
        <div className={"navbar"}>
          <HiOutlineMenuAlt3
            aria-label={"open menu"}
            onClick={() => {
              showSidebar();
            }}
            className={"menu-bars"}
          />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className={"nav-menu-items"}>
            <Link
              href={"#"}
              aria-label={"about section"}
              onClick={() => {
                onClickAbout(true);
                showSidebar();
              }}
            >
              <li className={"navbar-child"}>
                <span>00.</span> About
              </li>
            </Link>
            <Link
              href={"#projects"}
              scroll={true}
              aria-label={"projects section"}
              onClick={() => {
                onClickProjects(true);
                showSidebar();
              }}
            >
              <li className={"navbar-child"}>
                <span>01.</span> Projects
              </li>
            </Link>
            <Link
              href={"#"}
              aria-label={"mail me section"}
              onClick={(e) => {
                window.location.href = "mailto:runedanielj@gmail.com";
                e.preventDefault();
              }}
            >
              <li className={"navbar-child"}>
                <span>02.</span> Hit me up
              </li>
            </Link>
            {/*<a href={pdfFile} target={"_blank"} rel={"noopener noreferrer"}>
              <li className={"navbar-child resume"}>Resume</li>
            </a>*/}
            <li className="navbar-toggle">
              <IoClose
                aria-label={"close menu"}
                onClick={() => {
                  showSidebar();
                }}
                className={"menu-bars close"}
              />
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
