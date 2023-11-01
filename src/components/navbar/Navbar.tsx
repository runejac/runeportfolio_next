import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./Navbar.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
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
      <motion.nav className={styles.navbarContainer}>
        <motion.ol>
          <Link href={"#about"} scroll={false} aria-label={"about section"}>
            <motion.li
              variants={navBarItemsMotion}
              initial={"hidden"}
              animate={"show1"}
            >
              <span>00.</span> ABOUT
            </motion.li>
          </Link>
          <Link
            href={"#projects"}
            scroll={false}
            aria-label={"projects section"}
          >
            <motion.li
              variants={navBarItemsMotion}
              initial={"hidden"}
              animate={"show2"}
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
            >
              <span>02.</span> CONTACT
            </motion.li>
          </Link>
          <motion.a
            variants={navBarItemsMotion}
            initial={"hidden"}
            animate={"show4"}
            href={"CV.pdf"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <motion.li
              variants={navBarItemsMotion}
              initial={"hidden"}
              animate={"show4"}
              className={`navbar-item ${styles.resume}`}
            >
              Resume
            </motion.li>
          </motion.a>
        </motion.ol>
      </motion.nav>
      {sidebar && (
        <div
          onClick={() => {
            showSidebar();
          }}
          className={styles.backgroundSidebar}
          aria-label={"background sidebar exit from menu"}
        />
      )}
      <aside className={styles.sidebarContainer}>
        <div className={styles.navbar}>
          <HiOutlineMenuAlt3
            aria-label={"open menu"}
            onClick={() => {
              showSidebar();
            }}
            className={styles.menuBars}
          />
        </div>
        <nav className={`${styles.navMenu} ${sidebar ? styles.active : ""}`}>
          <ul className={styles.navMenuItems}>
            <Link
              href={"#about"}
              scroll={false}
              aria-label={"about section"}
              onClick={() => showSidebar()}
            >
              <li className={styles.navbarChild}>
                <span>00.</span> About
              </li>
            </Link>
            <Link
              href={"#projects"}
              scroll={false}
              aria-label={"projects section"}
              onClick={() => showSidebar()}
            >
              <li className={styles.navbarChild}>
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
              <li className={styles.navbarChild}>
                <span>02.</span> Hit me up
              </li>
            </Link>
            <Link href={"CV.pdf"} target={"_blank"} rel={"noopener noreferrer"}>
              <li className={"navbar-child resume"}>Resume</li>
            </Link>
            <li className={styles.navbarToggle}>
              <IoClose
                aria-label={"close menu"}
                onClick={() => {
                  showSidebar();
                }}
                className={`${styles.menuBars} ${styles.close}`}
              />
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
