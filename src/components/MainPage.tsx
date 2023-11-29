import IntroText from "@/components/introText/IntroText";
import AboutText from "@/components/aboutText/AboutText";
import { useContext, useEffect, useRef, useState } from "react";
import ProjectsText from "@/components/projects/ProjectsText";
import Navbar from "@/components/navbar/Navbar";
import styles from "./MainPage.module.scss";
import Modal from "@/components/projects/cards/modal/Modal";
import Footer from "@/components/footer/Footer";
import Background from "@/components/background/Background";
import { WindowWidthContext } from "@/context/WindowWidthContext";

export default function MainPage() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const projectsRef = useRef<null | HTMLElement>(null);
  const windowWidth = useContext(WindowWidthContext);
  const handleHeader = () => {
    return windowWidth! >= 800 && !visible ? "relative" : "sticky";
  };

  const openModal = () => {
    setShowModal((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <>
      <Background />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <header
        id={"header-tag"}
        style={{
          position: handleHeader(),
        }}
        className={styles.headerTag}
      >
        <Navbar />
      </header>
      <main className={styles.mainTag}>
        <IntroText />
        <section className={styles.projectsAndAboutSection}>
          <div className={styles.divContainer}>
            <ProjectsText projectsRef={projectsRef} openModal={openModal} />
            <AboutText />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
