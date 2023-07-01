import { useState, useEffect } from "react";

import "./style.css";

import BotonesNegros from "../BotonesNegros";
import { useLocation, Link } from "react-router-dom";
import Modal from "../Modal/index.jsx";
import { useIntl } from "react-intl";
import { BotonesIdioma } from "../BotonesIdioma/BotonesIdioma";
import { BASIC_URL } from "../../App";

const BurgerMenu = () => {

  /* ###########################################################
  ############# DECLARACIONES DE TRADUCCIONES ##################
  ############################################################## */
  const intl = useIntl();
  const fecha = intl.formatMessage({ id: "fecha" });
  const lugar = intl.formatMessage({ id: "lugar" });
  const noticias = intl.formatMessage({ id: "noticias" });
  const burgerMenuMas = intl.formatMessage({id: "burgerMenuMas"})
  const burgerMenuCosas = intl.formatMessage({id: "burgerMenuCosas"})

  /* ############################################################
  ############# FIN DELCARACIONES DE TRADUCCIONES ###############
  ############################################################### */

  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLang")
  );
  
  const [burgerMenu, setBurgerMenu] = useState(null);

  const [main, setMain] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [header, setHeader] = useState(null);
  const [mediaMobile, setMediaMobile] = useState(null);

  const [showHeader, setShowHeader] = useState(false);

  const toggleHeader = () => {
    setShowHeader(!showHeader);
    header.classList.toggle("open");
  };

  const toggleMain = () => {
    main.classList.toggle("openMain");
  };

  useEffect(() => {
    const burgerMenu = document.querySelector(".burgerMenu");
    const main = document.querySelector("main");

    if (main) {
      setMain(main);
    }
    if (burgerMenu) {
      setBurgerMenu(burgerMenu);
    }

    const header = document.querySelector("header");
    const mediaMobile = window.matchMedia("(max-width: 500px)");

    //   setListaPrograma(programa);
    //   setListaActividades(actividades);
    setHeader(header);
    setMediaMobile(mediaMobile);
  }, []);

  return (
    <>
      <div className={`burgerMenu ${showHeader ? "open" : "closed"}`}>
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (mediaMobile.matches) {
              toggleHeader();
              toggleMain();
            }
            burgerMenu.classList.toggle("clicked");

            if (mediaMobile.matches === false) {
              setShowModal(true);
            }
          }}
          style={{ lineHeight: "1.5" }}
        >
          {showHeader ? "menos" : burgerMenuMas}
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (mediaMobile.matches) {
              toggleHeader();
              toggleMain();
            }
            burgerMenu.classList.toggle("clicked");

            if (mediaMobile.matches === false) {
              setShowModal(true);
            }
          }}
          style={{ lineHeight: "1", position: "relative", bottom: "10px" }}
        >
          {burgerMenuCosas}
        </div>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <div className="burgerMenuOpen">
          <BotonesIdioma selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/>
            <div className="botonesNegrosModal">
              <BotonesNegros></BotonesNegros>
            </div>
            <ul className="listaContenido">
              <li>
                <a href={`${BASIC_URL}/open-call`}>OPEN CALL</a>{" "}
                {/*PALMARÉS*/}
              </li>
              <li>
                <a href={`${BASIC_URL}/open-call-lab`}>
                  OPEN CALL LAB
                </a>{" "}
                {/*PALMARÉS*/}
              </li>
              <li>
                <a href={`${BASIC_URL}/noticias`}>{noticias}</a>{" "}
                {/*PALMARÉS*/}
              </li>
              {/* <li>
                <a>PRÓXIMAMENTE</a>
                {/*PREMIOS
              </li>
              <li>
                <a>PRÓXIMAMENTE </a>
                {/*XURADOS INTERNACIONAL
              </li>
              <li>
                <a>PRÓXIMAMENTE </a>
                {/*QUEN SOMOS
              </li>
              <li>
                <a>PRÓXIMAMENTE</a>
                {/*PRENSA
              </li>
              <li>
                <a>PRÓXIMAMENTE</a>
                {/*ACREDITACIÓNS
              </li>
              <li>
                <a>PRÓXIMAMENTE</a>
                {/*PATROCINADORES
              </li>
              <li>
                <a>PRÓXIMAMENTE</a>
                {/*EQUIPO
              </li> */}
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
};

export default BurgerMenu;
