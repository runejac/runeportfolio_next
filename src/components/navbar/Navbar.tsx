import React, { useState } from "react";
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
        delay: 0.5,
      },
    },
    show2: {
      opacity: 1,
      transition: {
        delay: 0.6,
      },
    },
    show3: {
      opacity: 1,
      transition: {
        delay: 0.7,
      },
    },
    show4: {
      opacity: 1,
      transition: {
        delay: 0.8,
      },
    },
  };

  return (
    <>
      <motion.nav className={styles.navbarContainer}>
        <motion.ol>
          <motion.li
            variants={navBarItemsMotion}
            initial={"hidden"}
            animate={"show2"}
          >
            <Link href={"#projects"} scroll={false}>
              projects
            </Link>
          </motion.li>
          <motion.li
            variants={navBarItemsMotion}
            initial={"hidden"}
            animate={"show1"}
            aria-label={"scroll down to about section"}
          >
            <Link href={"#about"} scroll={false}>
              about
            </Link>
          </motion.li>
          <motion.li
            variants={navBarItemsMotion}
            initial={"hidden"}
            animate={"show3"}
            className={"navbar-item resume"}
          >
            <Link
              className={styles.resume}
              href={"/CV_Oliveira.pdf"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              resume
            </Link>
          </motion.li>
        </motion.ol>
        <motion.li
          variants={navBarItemsMotion}
          initial={"hidden"}
          animate={"show4"}
        >
          <Link
            className={styles.hitMeUp}
            href={"#"}
            aria-label={"mail me section"}
            onClick={(e) => {
              window.location.href = "mailto:runedanielj@gmail.com";
              e.preventDefault();
            }}
          >
            contact
          </Link>
        </motion.li>
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
            <li className={styles.navbarChild}>
              <Link
                href={"#projects"}
                scroll={false}
                aria-label={"projects section"}
                onClick={() => showSidebar()}
              >
                projects
              </Link>
            </li>
            <li className={styles.navbarChild}>
              <Link
                href={"#about"}
                scroll={false}
                aria-label={"about section"}
                onClick={() => showSidebar()}
              >
                about
              </Link>
            </li>
            <li className={styles.navbarChild}>
              <Link
                href={"/CV_Oliveira.pdf"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                resume
              </Link>
            </li>
            <li className={styles.navbarChild}>
              <Link
                href={"#"}
                aria-label={"mail me section"}
                onClick={(e) => {
                  window.location.href = "mailto:runedanielj@gmail.com";
                  e.preventDefault();
                }}
              >
                contact
              </Link>
            </li>
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
