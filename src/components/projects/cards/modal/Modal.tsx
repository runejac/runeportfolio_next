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
import Link from "next/link";

type ModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ showModal, setShowModal }: ModalProps) => {
  const data = useContext(DataContext);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableElementRef = useRef<HTMLAnchorElement>(null); // Ref for the first focusable element

  useEffect(() => {}, []);

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

  useEffect(() => {
    if (showModal && firstFocusableElementRef.current) {
      firstFocusableElementRef.current!.focus();
    }
    console.log(firstFocusableElementRef.current);
  }, [showModal]);

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
            <dialog
              role={"dialog"}
              aria-modal="true"
              open={showModal}
              className={styles.modalWrapper}
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
                          <Link
                            title={"GitHub"}
                            href={cardData.githubLink}
                            aria-label={"GitHub link"}
                            target={"_blank"}
                            ref={firstFocusableElementRef}
                          >
                            <RiGithubLine className={styles.icon} />
                          </Link>
                          {cardData.externalLink && (
                            <Link
                              title={"Open"}
                              href={cardData.externalLink}
                              aria-label={"External link"}
                              target={"_blank"}
                            >
                              <FiExternalLink className={styles.icon} />
                            </Link>
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
            </dialog>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
