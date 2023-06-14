import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";
import { BASIC_URL } from "../../App";
import { useIntl } from "react-intl";

import AddIcon from "@mui/icons-material/Add";

const DesplegablesHeader = () => {
  /* ###########################################################
############# DECLARACIONES DE TRADUCCIONES ##################
############################################################## */
  const intl = useIntl();
  const noticias = intl.formatMessage({ id: "noticias" });
  const programa = intl.formatMessage({ id: "programa" });

  /* ############################################################
############# FIN DELCARACIONES DE TRADUCCIONES ###############
############################################################### */

  const [seccionesVisibles, setSeccionesVisibles] = useState({});
  const indice = "noticias";

  return (
    <nav className="menuDesplegablesHeader">
      <ul className="menuSecciones">
        <li className="programa ">
          <div
            className="expandir-icono"
            onClick={() => {
              setSeccionesVisibles((prevState) => ({
                ...prevState,
                [indice]: !prevState[indice],
              }));
            }}
          >
            <AddIcon sx={{ fontSize: "28px" }} />
            <a href={`${BASIC_URL}/noticias`}>{noticias} </a>
          </div>
          <ul
            className={`listaSecciones ${
              seccionesVisibles[indice] ? "" : "oculto"
            }`}
          >
            <li>
              <a href="/noticia/interseccion-echoes-viaja-a-costa-rica">
                INTERSECCION ECHOES viaxa a <br></br> Costa Rica{" "}
              </a>
            </li>
            <li>
              <a href="/noticia/miradas-diversas-a-coruna">
                Miradas Diversas A Coruña{" "}
              </a>
            </li>
            <li>
              <a href="/noticia/interseccion-echoes-viaja-a-medellin">
                INTERSECCION ECHOES viaxa a Medellín{" "}
              </a>
            </li>
            <li>
              <a href="/noticia/interseccion-colaborador-en-los-premios-goya">
                INTERSECCIÓN, colaborador nos Premios Goya
              </a>
            </li>
            <li>
              <a href="/noticia/interseccion-echoes-viaja-a-argentina">
                INTERSECCION ECHOES viaxa a Arxentina{" "}
              </a>
            </li>
            <li>
              <a href="/noticia/comienza-miradas-diversas-a-coruna">
                Comeza Miradas Diversas A Coruña{" "}
              </a>
            </li>
            <li>
              <a href="/noticia/abiertas-las-convocatorias-para-participar-en-interseccion">
                Abertas as convocatorias para participar en INTERSECCIÓN{" "}
              </a>
            </li>
            <li>
              <a href="/noticia/interseccion-echoes-viaja-a-uruguay">
                {" "}
                INTERSECCIÓN ECHOES viaxa a Uruguay
              </a>
            </li>
            {/*<li>
            <a>Viva la seoane </a>
        </li>
        <li>
            <a>Corte final </a>
        </li> */}
          </ul>
        </li>

        <li className="programa ">
          <div>
            <AddIcon sx={{ fontSize: "28px" }} />
            <a href="/echoes">ECHOES</a>
          </div>
        </li>

        <li className="programa  ">
          <a href="/open-call">OPEN CALL</a>
        </li>

        <li className="programa  ">
          <a href="/open-call-lab">OPEN CALL LAB</a>
        </li>

        <li className="programa">
          <div
            className="expandir-icono"
            onClick={() => {
              setSeccionesVisibles((prevState) => ({
                ...prevState,
                programa: !prevState.programa,
              }));
            }}
          >
            <AddIcon sx={{ fontSize: "28px" }} />
            <a href={`${BASIC_URL}/noticias`}>{programa} </a>
          </div>

          <ul
            className={`listaSecciones ${
              seccionesVisibles.programa ? "" : "oculto"
            }`}
          >
            <li className="tipoSecciones">
              <a>SECCIONES COMPETITIVAS</a>
              <ul className="listaSecciones">
                <li>
                  <a>internacional</a>
                </li>
                <li>
                  <a>galicia</a>
                </li>
                <li>
                  <a>escolas</a>
                </li>
              </ul>
            </li>
            <li className="tipoSecciones">
              <a>SECCIONES NO COMPETITIVAS </a>
              <ul className="listaSecciones">
                LISTA DE SECCIONES NO COMPETITIVAS
                <li>
                  <a>Una caida, una polla</a>
                </li>
                <li>
                  <a>Gonzalo y amigos</a>
                </li>
                <li>
                  <a>David Fidalgo despues de 7 años intentandolo</a>
                </li>
                <li>
                  <a>Sección que nadie verña</a>
                </li>
                <li>
                  <a>VR</a>
                </li>
                <li>
                  <a>Bocata calamares</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/*
    </li>

    <li
    className="programa lab"
    onClick={() => {
        navigate("/lab");
        listaLab.classList.remove("oculto");
        listaLab.classList.add("permanente");
        listaPrograma.classList.add("oculto");
        listaPrograma.classList.remove("permanente");
        listaActividades.classList.add("oculto");
    }}
    onMouseLeave={() => {
        if (listaLab.classList.contains("permanente")) {
        return;
        }

        listaLab.classList.add("oculto");
    }}
    onMouseOver={() => {
        clearTimeout(timeoutLab);
        listaLab.classList.remove("oculto");

        listaLab.scrollIntoView(true);
    }}
    >
    <a>LAB </a>
    <ul className="listaSecciones oculto">
        {/* Y aqui estaria la lista de secciones 
        <li>
        <a>Dinero a gente pa que viva la vida fuera de casa </a>
        </li>
        <li>
        <a>1 to 1 </a>
        </li>
        <li>
        <a>Viva la seoane </a>
        </li>
        <li>
        <a>Corte final </a>
        </li>
    </ul>
    </li>
    <li
    className="programa actividades "
    onMouseEnter={() => {
        clearTimeout(timeoutAct);
        listaActividades.classList.remove("oculto");
        listaActividades.scrollIntoView(true);
    }}
    onMouseLeave={() => {
        listaActividades.classList.add("oculto");
    }}
    >
    <a>ACTIVIDADES</a>
    <ul className="listaSecciones oculto">
        {/* Y aqui estaria la lista de secciones 
        <li>
        <a>AulaCREA </a>
        </li>
        <li>
        <a>AulaColectiva </a>
        </li>
    </ul>*/}
      </ul>
    </nav>
  );
};

export default DesplegablesHeader;
