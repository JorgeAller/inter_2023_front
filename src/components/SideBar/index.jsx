import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import BotonesNegros from "../BotonesNegros/index.jsx";
import DesplegablesHeader from "../DesplegablesHeader/index.jsx";
import "./style.css";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/slices/configurationSlice.js";
import { BotonesIdioma } from "../BotonesIdioma/BotonesIdioma.jsx";

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
  const selectedColor = useSelector((state)=>state.configuration.color)
  

  

  return (
    <header style={{ backgroundColor: selectedColor }}>
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
        <BotonesIdioma
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
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
