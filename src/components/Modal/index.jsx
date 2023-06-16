import "./style.css";

import buttonCancel from "../../assets/images/buttonCancel.png";
import { useState, useEffect } from "react";

const Modal = ({ children, setShowModal }) => {
  const [isOpen, setIsOpen] = useState(true);
  const burgerMenu = document.querySelector(".burgerMenu");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowModal]);

  const handleClose = () => {
    setShowModal(false);
    setIsOpen(false);

    if (burgerMenu) {
      burgerMenu.classList.remove("clicked");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modalBack"
      onClick={(event) => {
        event.preventDefault();
        handleClose();
      }}
    >
      <div
        className="modalContainer"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {children}
      </div>
      <img
        src={buttonCancel}
        alt="buttonCancel"
        className="buttonCancel"
        style={{ cursor: "pointer" }}
        onClick={(event) => {
          event.preventDefault();
          setShowModal(false);

          if (burgerMenu) {
            burgerMenu.classList.remove("clicked");
          }
        }}
      ></img>
    </div>
  );
};

export default Modal;
