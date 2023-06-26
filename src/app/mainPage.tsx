"use client";
import IntroText from "@/app/introText/IntroText";
import AboutText from "@/app/aboutText/AboutText";
import { useEffect, useRef, useState } from "react";
import ProjectsText from "@/app/projects/ProjectsText";
import Navbar from "@/app/navbar/Navbar";
import Logo from "@/app/logo/Logo";
import Footer from "@/app/footer/Footer";
import styles from "./mainPage.module.scss";
import Modal from "@/app/projects/cards/modal/Modal";

export default function MainPage() {
  const [goToAbout, setGoToAbout] = useState(false);
  const [goToProjects, setGoToProjects] = useState(false);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (goToAbout && aboutRef.current) {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      setGoToAbout(false);
    }
    if (goToProjects && projectsRef.current) {
      projectsRef.current?.scrollIntoView({
        behavior: "smooth",
      });
      setGoToProjects(false);
    }
  }, [goToAbout, aboutRef.current, goToProjects, projectsRef.current]);

  const [showModal, setShowModal] = useState(false);

  let amountNumberFromScreenWidth;

  const checkWidth = () => {
    if (window.innerWidth > 768) amountNumberFromScreenWidth = 1;
    else if (window.innerWidth <= 768) amountNumberFromScreenWidth = 0;
  };

  checkWidth();

  const openModal = () => {
    setShowModal((prevState) => !prevState);
  };

  // hides navbar when scrolling
  let prevScrollpos = typeof window !== "undefined" ? window.scrollY : 0;
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        const headerTag = document.querySelector("#header-tag");
        if (headerTag) {
          headerTag.style.top = "0";
        }
      } else {
        const headerTag = document.querySelector("#header-tag");
        if (headerTag) {
          headerTag.style.top = "-100px";
        }
      }
      prevScrollpos = currentScrollPos;
    };
  }

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <header id={"header-tag"} className={styles.headerTag}>
        <Navbar onClickAbout={setGoToAbout} onClickProjects={setGoToProjects} />
        <Logo />
      </header>
      <main className={styles.mainTag}>
        <IntroText />
        <AboutText aboutRef={aboutRef} />
        <ProjectsText
          amountNumberFromScreenWidth={amountNumberFromScreenWidth}
          projectsRef={projectsRef}
          openModal={openModal}
        />
      </main>
      <Footer />
    </>
  );
}
