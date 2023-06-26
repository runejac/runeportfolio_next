import React, { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./modal.scss";
import cardsData from "../CardsData";
import { indexClicked } from "../CardItem.jsx";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

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

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  // Makes Escape key close the modal
  const keyPress = useCallback(
    (e) => {
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
        <div className={"background"} onClick={closeModal} ref={modalRef}>
          <motion.div
            className={"motion-div"}
            variants={animation}
            initial={"hidden"}
            animate={"show"}
            exit={"exit"}
          >
            <div
              className={"modalWrapper"}
              onClick={(e) => e.stopPropagation()}
            >
              {cardsData.map((cardData, index) => {
                if (cardData.id === indexClicked) {
                  return (
                    <React.Fragment key={index}>
                      <Image
                        style={{ objectFit: "contain" }}
                        className={"modalImg"}
                        src={cardData.img}
                        alt="image of app"
                      />
                      <div className={"modalContent"}>
                        <h1>{cardData.appTitle}</h1>
                        <p>{cardData.content}</p>
                        <p className={"downPaaS"}>{cardData.downAtPaaS}</p>
                        <div className={"icon-container"}>
                          <a
                            title={"GitHub"}
                            href={cardData.github}
                            aria-label={"GitHub link"}
                            target={"_blank"}
                          >
                            <RiGithubLine className={"icon"} />
                          </a>
                          {cardData.externalLink && (
                            <a
                              title={"Open"}
                              href={cardData.externalLink}
                              aria-label={"External link"}
                              target={"_blank"}
                            >
                              <FiExternalLink className={"icon"} />
                            </a>
                          )}
                        </div>
                      </div>
                      <IoClose
                        className={"modal-close"}
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
