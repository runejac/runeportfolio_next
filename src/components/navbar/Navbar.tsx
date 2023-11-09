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
          <Link href={"#about"} scroll={false} aria-label={"about section"}>
            <motion.li
              variants={navBarItemsMotion}
              initial={"hidden"}
              animate={"show1"}
            >
              about
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
              projects
            </motion.li>
          </Link>
          <Link
            className={styles.resume}
            href={"/CV_Oliveira.pdf"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <motion.li
              variants={navBarItemsMotion}
              initial={"hidden"}
              animate={"show3"}
              className={"navbar-item resume"}
            >
              resume
            </motion.li>
          </Link>
        </motion.ol>
        <Link
          className={styles.hitMeUp}
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
            animate={"show4"}
          >
            email
          </motion.li>
        </Link>
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
              <li className={styles.navbarChild}>About</li>
            </Link>
            <Link
              href={"#projects"}
              scroll={false}
              aria-label={"projects section"}
              onClick={() => showSidebar()}
            >
              <li className={styles.navbarChild}>Projects</li>
            </Link>
            <Link
              href={"#"}
              aria-label={"mail me section"}
              onClick={(e) => {
                window.location.href = "mailto:runedanielj@gmail.com";
                e.preventDefault();
              }}
            >
              <li className={styles.navbarChild}>HIT ME UP</li>
            </Link>
            <Link
              href={"/CV_Oliveira.pdf"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <li className={"navbar-child resume"}>RESUME</li>
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
