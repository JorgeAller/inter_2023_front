import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";
import { BASIC_URL } from "../../App";
import { useIntl } from "react-intl";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useDispatch, useSelector } from "react-redux";
import { setDesplegablesEchoes, setDesplegablesNoticias, setDesplegablesPrograma } from "../../redux/slices/configurationSlice";

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

  const desplegablePrograma = useSelector((state)=>state.configuration.desplegables.programa);
  const desplegableEchoes = useSelector((state)=>state.configuration.desplegables.echoes);
  const desplegableNoticias = useSelector((state)=>state.configuration.desplegables.noticias);
  console.log({desplegablePrograma});
  console.log({desplegableEchoes});
  console.log({desplegableNoticias});

  const dispatch = useDispatch();
  

  return (
    <nav className="menuDesplegablesHeader">
      <ul className="menuSecciones">
      <li className="programa">
          <div
            className="expandir-icono"
            onClick={() => {
              dispatch(setDesplegablesPrograma(!desplegablePrograma))
            }}
          >
            <Link to='/programa'>{programa} </Link>
            {desplegablePrograma ? <ExpandLessIcon sx={{ fontSize: "40px", mb:'3.5px', mr:-1, ml:-0.5, '&:hover':{fontWeight:'bold'}}}/> : <ExpandMoreIcon sx={{ fontSize: "40px", mb:'3.5px', mr: -1, ml:-0.5 }} />} 
          </div>

          <ul
            className={`listaSecciones ${
              desplegablePrograma ? "" : "oculto"
            }`}
          >
            <li className="tipoSecciones">
              <a>SECCIONES COMPETITIVAS</a>
              <ul className="listaSecciones">
                <li>
                  <Link>internacional</Link>
                </li>
                <li>
                  <Link>galicia</Link>
                </li>
                <li>
                  <Link>escolas</Link>
                </li>
              </ul>
            </li>
            <li className="tipoSecciones">
              <Link>SECCIONES NO COMPETITIVAS </Link>
              <ul className="listaSecciones">
                <li>
                  <Link>Una caida, una polla</Link>
                </li>
                <li>
                  <Link>Gonzalo y amigos</Link>
                </li>
                <li>
                  <Link>David Fidalgo despues de 7 años intentandolo</Link>
                </li>
                <li>
                  <Link>Sección que nadie verña</Link>
                </li>
                <li>
                  <Link>VR</Link>
                </li>
                <li>
                  <Link>Bocata calamares</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="programa ">
          <div
            className="expandir-icono"
            onClick={() => {
              dispatch(setDesplegablesNoticias(!desplegableNoticias))
              
            }}
          >
            <Link to='/noticias'>{noticias} </Link>
            {desplegableNoticias ? <ExpandLessIcon sx={{ fontSize: "40px", mb:'3.5px',mr: -1,ml: -0.5, '&:hover':{fontWeight:'bold'}}}/> : <ExpandMoreIcon sx={{ fontSize: "40px" , mb:'3.5px', mr:-1, ml: -0.5}} />} 
          </div>
          <ul
            className={`listaSecciones ${
              desplegableNoticias ? "" : "oculto"
            }`}
          >
            <li>
              <Link to="/noticia/interseccion-echoes-viaja-a-costa-rica">
                INTERSECCION ECHOES viaxa a <br></br> Costa Rica{" "}
              </Link>
            </li>
            <li>
              <Link to="/noticia/miradas-diversas-a-coruna">
                Miradas Diversas A Coruña{" "}
              </Link>
            </li>
            <li>
              <Link to="/noticia/interseccion-echoes-viaja-a-medellin">
                INTERSECCION ECHOES viaxa a Medellín{" "}
              </Link>
            </li>
            <li>
              <Link to="/noticia/interseccion-colaborador-en-los-premios-goya">
                INTERSECCIÓN, colaborador nos Premios Goya
              </Link>
            </li>
            <li>
              <Link to="/noticia/interseccion-echoes-viaja-a-argentina">
                INTERSECCION ECHOES viaxa a Arxentina{" "}
              </Link>
            </li>
            <li>
              <Link to="/noticia/comienza-miradas-diversas-a-coruna">
                Comeza Miradas Diversas A Coruña{" "}
              </Link>
            </li>
            <li>
              <Link to="/noticia/abiertas-las-convocatorias-para-participar-en-interseccion">
                Abertas as convocatorias para participar en INTERSECCIÓN{" "}
              </Link>
            </li>
            <li>
              <Link to="/noticia/interseccion-echoes-viaja-a-uruguay">
                {" "}
                INTERSECCIÓN ECHOES viaxa a Uruguay
              </Link>
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
          <div 
            className="expandir-icono"
            onClick={() => {
              dispatch(setDesplegablesEchoes(!desplegableEchoes))
            }}
          >
            <Link style={{marginTop:'2px'}} to="/echoes">ECHOES</Link>
          {desplegableEchoes ? <ExpandLessIcon sx={{ fontSize: "40px", mb:'3.5px', mr: -1, ml: -0.5,'&:hover':{fontWeight:'bold'}}}/> : <ExpandMoreIcon sx={{ fontSize: "40px" ,mb:'3.5px', mr: -1, ml: -0.5}} />} 
          </div>
        </li>

        <li className="programa " style={{height: '40px'}}>
          <Link to="/open-call">OPEN CALL</Link>
        </li>

        <li className="programa  " style={{height: '40px'}}>
          <Link to="/open-call-lab">OPEN CALL LAB</Link>
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
