import React, { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Modal.module.scss";
import cardsData from "../CardsData";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { indexClicked } from "@/components/projects/cards/CardItem";

type ModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ showModal, setShowModal }: ModalProps) => {
  const modalRef = useRef<any>();

  const animation = {
    hidden: { y: "-200px", opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "200px",
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  // Makes Escape key close the modal
  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <AnimatePresence initial={false} mode={"wait"}>
      {showModal ? (
        <div className={styles.background} onClick={closeModal} ref={modalRef}>
          <motion.div
            className={styles.motionDiv}
            variants={animation}
            initial={"hidden"}
            animate={"show"}
            exit={"exit"}
          >
            <div
              className={styles.modalWrapper}
              onClick={(e) => e.stopPropagation()}
            >
              {cardsData.map((cardData, index) => {
                if (cardData.id === indexClicked) {
                  return (
                    <React.Fragment key={index}>
                      <Image
                        style={{ objectFit: "contain" }}
                        className={styles.modalImg}
                        src={cardData.img}
                        alt="image of app"
                      />
                      <div className={styles.modalContent}>
                        <h1>{cardData.appTitle}</h1>
                        <p>{cardData.content}</p>
                        <p className={styles.downPaaS}>{cardData.downAtPaaS}</p>
                        <div className={styles.iconContainer}>
                          <a
                            title={"GitHub"}
                            href={cardData.github}
                            aria-label={"GitHub link"}
                            target={"_blank"}
                          >
                            <RiGithubLine className={styles.icon} />
                          </a>
                          {cardData.externalLink && (
                            <a
                              title={"Open"}
                              href={cardData.externalLink}
                              aria-label={"External link"}
                              target={"_blank"}
                            >
                              <FiExternalLink className={styles.icon} />
                            </a>
                          )}
                        </div>
                      </div>
                      <IoClose
                        onClick={() => setShowModal((prev) => !prev)}
                        className={styles.modalClose}
                        aria-label={"Close modal"}
                      />
                    </React.Fragment>
                  );
                }
              })}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
