import React, { useCallback, useContext, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Modal.module.scss";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { indexClicked } from "@/components/projects/cards/CardItem";
import { DataContext } from "@/context/DataContext";
import stylesBlob from "@/components/imageOfMe/blob/Blob.module.scss";

type ModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ showModal, setShowModal }: ModalProps) => {
  const data = useContext(DataContext);
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
        stiffness: 500
      }
    },
    exit: {
      y: "200px",
      opacity: 0,
      transition: {
        duration: 0.1
      }
    }
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

  const setCardColor = (index: number) => {
    let cardColorClass = "";
    switch (index) {
      case 0:
        cardColorClass = stylesBlob.card0;
        break;
      case 1:
        cardColorClass = stylesBlob.card1;
        break;
      case 2:
        cardColorClass = stylesBlob.card2;
        break;
      case 3:
        cardColorClass = stylesBlob.card3;
        break;
    }

    return cardColorClass;
  };

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
              {data.cardsData.map((cardData, index) => {
                if (cardData.id === indexClicked) {
                  return (
                    <React.Fragment key={index}>
                      <Image
                        className={styles.modalImg}
                        src={cardData.img}
                        alt="image of app"
                      />
                      {/*<BlobCard
                        svgClassName={`${stylesBlob.svgBlobCard} ${setCardColor(
                          index
                        )} `}
                        cardNumber={index}
                      />*/}
                      <div className={styles.modalContent}>
                        <h1>{cardData.appTitle}</h1>
                        <p>{cardData.appDescription}</p>
                        <div className={styles.iconContainer}>
                          <a
                            title={"GitHub"}
                            href={cardData.githubLink}
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
