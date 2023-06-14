import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import BotonesNegros from "../BotonesNegros/index.jsx";
import DesplegablesHeader from "../DesplegablesHeader/index.jsx";
import "./style.css";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/slices/configurationSlice.js";

const SideBar = () => {
  /* ###########################################################
  ############# DECLARACIONES DE TRADUCCIONES ##################
  ############################################################## */
  const intl = useIntl();

  const fecha = intl.formatMessage({ id: "fecha" });
  const lugar = intl.formatMessage({ id: "lugar" });
  const noticias = intl.formatMessage({ id: "noticias" });

  /* ############################################################
  ############# FIN DELCARACIONES DE TRADUCCIONES ###############
  ############################################################### */

  const navigate = useNavigate();
  const location = useLocation();

  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLang")
  );

  const dispatch = useDispatch();
  const handleSelectorLanguage = (language) => {
    dispatch(setLanguage(language));
    setSelectedLanguage(language);
  };

  return (
    <header>
      <img
        src={`${import.meta.env.VITE_PUBLIC_URL}/images/logoInterseccion.png`}
        alt="logoIntersección"
        onClick={() => {
          navigate("/");
        }}
      ></img>
      <hr className="lineaSeparadoraLogo"></hr>

      <div className="fechaLugar">
        <div className="fecha">
          {fecha}
          <hr className="lineaMedioFechaaa"></hr>2023
        </div>
        <div className="lugar">
          A CORUÑA<hr className="lineaMedioLugar"></hr>
          {lugar}
        </div>
      </div>

      <nav className="botonesPequeños">
        <ul className="redes">
          <li>
            <SocialIcon
              className="socialIcon"
              bgColor="black"
              fgColor="none"
              url="https://twitter.com/interseccion__"
              style={{ height: 28, width: 28 }}
            ></SocialIcon>
          </li>
          <li>
            <SocialIcon
              className="socialIcon"
              bgColor="black"
              fgColor="none"
              url="https://www.instagram.com/interseccionfestival/"
              style={{ height: 28, width: 28 }}
              target="_blank"
            ></SocialIcon>
          </li>
          <li>
            <SocialIcon
              className="socialIcon"
              bgColor="black"
              fgColor="none"
              url="https://www.facebook.com/interseccionfestival/"
              style={{ height: 28, width: 28 }}
              target="_blank"
            ></SocialIcon>
          </li>
          <li>
            <SocialIcon
              className="socialIcon"
              bgColor="black"
              fgColor="none"
              url="https://www.youtube.com/channel/UCpe2PXJKq0r_jrYjV7xVpjA"
              style={{ height: 28, width: 28 }}
              target="_blank"
            ></SocialIcon>
          </li>
          <li>
            <SocialIcon
              className="socialIcon"
              bgColor="black"
              fgColor="none"
              url="https://www.linkedin.com/company/interseccionfestival/mycompany/"
              style={{ height: 28, width: 28 }}
              target="_blank"
            />
          </li>
        </ul>
        <ul className="idioma">
          <li
            className={`${
              selectedLanguage === "gl"
                ? "idiomaButtonSelected"
                : "idiomaButton"
            }`}
            key="gl"
            value="gl"
            onClick={() => {
              handleSelectorLanguage("gl");
            }}
          >
            gl
          </li>
          <li
            className={`${
              selectedLanguage === "en"
                ? "idiomaButtonSelected"
                : "idiomaButton"
            }`}
            key="en"
            value="en"
            onClick={() => {
              handleSelectorLanguage("en");
            }}
          >
            en
          </li>
          <li
            className={`${
              selectedLanguage === "es-ES"
                ? "idiomaButtonSelected"
                : "idiomaButton"
            }`}
            key="es-ES"
            value="es-ES"
            onClick={() => {
              handleSelectorLanguage("es-ES");
            }}
          >
            es
          </li>
        </ul>
      </nav>

      <hr className="lineaSeparadoraLogoAbajo"></hr>

      <nav className="botonesNegrosHeader">
        <BotonesNegros></BotonesNegros>
      </nav>

      <DesplegablesHeader></DesplegablesHeader>
    </header>
  );
};

export default SideBar;
