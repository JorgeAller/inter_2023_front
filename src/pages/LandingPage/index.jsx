/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import { useNavigate } from "react-router-dom";
import "./style.css";
import { SocialIcon } from "react-social-icons";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/slices/configurationSlice";
import { BASIC_URL } from "../../App";

export const LandingPage = () => {
  const navigate = useNavigate();
  const intl = useIntl();

  /* ###########################################################
  ############# DECLARACIONES DE TRADUCCIONES ##################
  ############################################################## */

  const fecha = intl.formatMessage({ id: "fecha" });
  const lugar = intl.formatMessage({ id: "lugar" });
  const noticias = intl.formatMessage({ id: "noticias" });

  /* ############################################################
  ############# FIN DELCARACIONES DE TRADUCCIONES ###############
  ############################################################### */

  const dispatch = useDispatch();
  const handleSelectorLanguage = (language) => {
    dispatch(setLanguage(language));
  };

  return (
    <>
      <video
        src={`${BASIC_URL}/videos/00_inicio.mp4`}
        autoPlay="autoPlay"
        muted="muted"
        loop="loop"
        playsInline="playsInline"
        className="videoLanding"
      />

      <div className="landing">
        <img
          src={`${BASIC_URL}/images/logoInterseccion.png`}
          alt="logoIntersección"
          onClick={() => {
            navigate("/");
          }}
          className="imageLanding"
        />

        <div className="fechaLugarLanding">
          <div className="fechalanding">
            {fecha}
            <hr className="lineaLugarLanding"></hr> 2023{" "}
          </div>
          <div className="lugarLanding">
            A CORUÑA <hr className="lineaFechaLanding"></hr> {lugar}
          </div>
        </div>

        <div className="listaBotones">
          <div className="wrapper">
            <a href="/echoes"></a>
            <a href="/echoes"></a>
            <a href="/echoes"></a>
            <a href="/echoes"></a>
            <div className="fill-text" data-text="ECHOES">
              ECHOES
            </div>
          </div>

          <div className="wrapper">
            <a href="/programa"></a>
            <a href="/programa"></a>
            <a href="/programa"></a>
            <a href="/programa"></a>
            <div className="fill-text" data-text="PROGRAMA">
              PROGRAMA
            </div>
          </div>
          <div className="wrapper">
            <a href="/open-call"></a>
            <a href="/open-call"></a>
            <a href="/open-call"></a>
            <a href="/open-call"></a>
            <div className="fill-text" data-text="OPEN CALL">
              OPEN CALL
            </div>
          </div>

          <div className="wrapper">
            <a href="/open-call-lab"></a>
            <a href="/open-call-lab"></a>
            <a href="/open-call-lab"></a>
            <a href="/open-call-lab"></a>
            <div className="fill-text" data-text="OPEN CALL LAB">
              OPEN CALL LAB
            </div>
          </div>

          <div className="wrapper">
            <a href={`${BASIC_URL}/noticias`}></a>
            <a href={`${BASIC_URL}/noticias`}></a>
            <a href={`${BASIC_URL}/noticias`}></a>
            <a href={`${BASIC_URL}/noticias`}></a>
            <div className="fill-text" data-text={noticias}>
              {noticias}
            </div>
          </div>
        </div>

        <ul className="redesLanding">
          <li>
            <SocialIcon
              bgColor="none"
              fgColor="white"
              url="https://twitter.com/interseccion__"
              style={{ height: 45, width: 45 }}
            ></SocialIcon>
          </li>
          <li>
            <SocialIcon
              bgColor="none"
              fgColor="white"
              url="https://www.instagram.com/interseccionfestival/"
              style={{ height: 45, width: 45 }}
              target="_blank"
            ></SocialIcon>
          </li>
          <li>
            <SocialIcon
              bgColor="none"
              fgColor="white"
              url="https://www.facebook.com/interseccionfestival/"
              style={{ height: 45, width: 45 }}
              target="_blank"
            ></SocialIcon>
          </li>
          <li>
            <SocialIcon
              bgColor="none"
              fgColor="white"
              url="https://www.youtube.com/channel/UCpe2PXJKq0r_jrYjV7xVpjA"
              style={{ height: 45, width: 45 }}
              target="_blank"
            ></SocialIcon>
          </li>
          <li>
            <SocialIcon
              bgColor="none"
              fgColor="white"
              url="https://www.linkedin.com/company/interseccionfestival/mycompany/"
              style={{ height: 45, width: 45 }}
              target="_blank"
            />
          </li>
        </ul>

        <ul className="idiomaLanding">
          <li
            className="idiomaButtonLanding"
            key="gl"
            value="gl"
            onClick={() => {
              handleSelectorLanguage("gl");
            }}
          >
            gl
          </li>
          <li
            className="idiomaButtonLanding"
            key="en"
            value="en"
            onClick={() => {
              handleSelectorLanguage("en");
            }}
          >
            en
          </li>
          <li
            className="idiomaButtonLanding"
            key="es-ES"
            value="es-ES"
            onClick={() => {
              handleSelectorLanguage("es-ES");
            }}
          >
            es
          </li>
        </ul>
      </div>
    </>
  );
};
