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
import { Box, List } from "@mui/material";
import { useGetSectionsQuery } from "../../services/api";

const DesplegablesHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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


    /* ############################################################
    ######################## SECCIONES  ##############################
    ############################################################### */
    const { data: dataSection, isLoading: isLoadingSection } = useGetSectionsQuery({},{})

    !isLoadingSection && console.log(dataSection);
    return (
        <Box sx={{ display:'flex' , flexDirection: 'column'}}>
            
           { /* -------------------------------------------------------------------------- */
            /*                                  PROGRAMA                                  */
            /* -------------------------------------------------------------------------- */}

            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', width: '100%'}}>
                <Box
                    className="expandir-icono"
                    onClick={() => {
                        dispatch(setDesplegablesPrograma(!desplegablePrograma))
                    }}
                    sx={{
                        fontSize: '25px',
                        fontWeight: 900,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mr:-1
                    }}
                >
                    <Box component={Link} to='/programa' sx={{textDecoration:'none', color: 'inherit'}}>{programa} </Box>
                    {desplegablePrograma 
                        ? <ExpandLessIcon sx={{ fontSize: "40px", mt: 0.2,'&:hover':{fontWeight:'bold'}}}/> 
                        : <ExpandMoreIcon sx={{ fontSize: "40px", mt: 0.2 }} />
                    } 
                </Box>

                {/* BLOQUE SECCIONES PROGRAMA*/}
                <Box
                    sx={{
                        display: desplegablePrograma ? 'flex' : 'none', 
                        flexDirection: 'column', 
                        alignItems: 'end',
                        mb: 1
                    }}
                > 

                    {/* -------------------------------------------------------------------------- */
                    /*                           SECCIONES COMPETITIVAS                           */
                    /* -------------------------------------------------------------------------- */}

                    <Box sx={{mt:1}}>
                        <Box 
                            component={Link} 
                            to={'/'}
                            sx={{mb: 0.75, mt: 1, fontWeight: 700, textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'end'}}
                        >
                            SECCIONES COMPETITIVAS
                        </Box>
                        <Box sx={{textAlign: 'end', display: 'flex', flexDirection:'column', alignItems:'end', textDecoration: 'none', color: 'inherit'}}>
                            {!isLoadingSection &&
                                dataSection.data.sections.sections.filter(section => section.type === 'COMPETITIVA').map((section)=> (
                                    <Box 
                                        key={section.id}
                                        component={Link} 
                                        to={`/section/${section.id}`} 
                                        sx={{my: 0.5, textDecoration: 'none', color: 'inherit', '&:hover':{fontWeight: 700, color: "white"}}}
                                    >
                                        {section.title}
                                    </Box>
                                ))
                            }
                           
                        </Box>
                    </Box>

                    {/* -------------------------------------------------------------------------- */
                    /*                          SECCIONES NO COMPETITIVAS                         */
                    /* -------------------------------------------------------------------------- */}

                    <Box sx={{mt:1}}>
                        <Box 
                            component={Link} 
                            to={'/'}
                            sx={{mb: 0.75, mt: 1, fontWeight: 700,textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'end'}}
                        >
                            SECCIONES NO COMPETITIVAS
                        </Box>
                        <Box sx={{display: 'flex', flexDirection:'column', alignItems:'end', textDecoration: 'none', color: 'inherit'}}>
                            {!isLoadingSection &&
                                dataSection.data.sections.sections.filter(section => section.type !== 'COMPETITIVA').map((section)=> (
                                    <Box 
                                        key={section.id}
                                        component={Link} 
                                        to={`/section/${section.id}`} 
                                        sx={{my: 0.5, textDecoration: 'none', color: 'inherit', '&:hover':{fontWeight: 700, color: "white"}}}
                                    >
                                        {section.title}
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
            
            {/* -------------------------------------------------------------------------- */
            /*                                  NOTICIAS                                  */
            /* -------------------------------------------------------------------------- */}
            
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', width: '100%', mt: 1}}>
                <Box
                    className="expandir-icono"
                    onClick={() => {
                        dispatch(setDesplegablesNoticias(!desplegableNoticias))
                    }}
                    sx={{
                        fontSize: '25px',
                        fontWeight: 900,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mr:-1
                    }}
                >
                    <Box component={Link} to='/noticias' sx={{textDecoration:'none', color: 'inherit'}}>{noticias} </Box>
                    {desplegableNoticias 
                        ? <ExpandLessIcon sx={{ fontSize: "40px", mt: 0.2, '&:hover':{fontWeight:'bold'}}}/> 
                        : <ExpandMoreIcon sx={{ fontSize: "40px", mt: 0.2 }} />
                    } 
                </Box>
                <Box
                    sx={{
                        display: desplegableNoticias ? 'flex' : 'none', 
                        flexDirection: 'column', 
                        alignItems: 'end',
                    }}
                >
                    
                    <Box 
                        component={Link}
                        to="/noticia/interseccion-echoes-viaja-a-costa-rica" 
                        sx={{textAlign: 'end', my: 0.7, textDecoration: 'none', color: 'inherit', '&:hover': {fontWeight: 700, color:"white"}}}
                    >
                        INTERSECCION ECHOES viaxa a <br></br> Costa Rica{" "}
                    </Box>
                    
                    
                    <Box 
                        component={Link}
                        to="/noticia/miradas-diversas-a-coruna"
                        sx={{textAlign: 'end', my: 0.7, textDecoration: 'none', color: 'inherit', '&:hover': {fontWeight: 700, color:"white"}}}
                    >
                        Miradas Diversas A Coruña{" "}
                    </Box>
                    
                    
                    <Box 
                        component={Link}
                        to="/noticia/interseccion-echoes-viaja-a-medellin"
                        sx={{textAlign: 'end', my: 0.7, textDecoration: 'none', color: 'inherit', '&:hover': {fontWeight: 700, color:"white"}}}
                    >
                        INTERSECCION ECHOES viaxa a Medellín{" "}
                    </Box>
                    
                    
                    <Box 
                        component={Link}
                        to="/noticia/interseccion-colaborador-en-los-premios-goya"
                        sx={{textAlign: 'end', my: 0.7, textDecoration: 'none', color: 'inherit', '&:hover': {fontWeight: 700, color:"white"}}}
                    >
                        INTERSECCIÓN, colaborador nos Premios Goya
                    </Box>
                    
                    
                    <Box 
                        component={Link}
                        to="/noticia/interseccion-echoes-viaja-a-argentina"
                        sx={{textAlign: 'end', my: 0.7, textDecoration: 'none', color: 'inherit', '&:hover': {fontWeight: 700, color:"white"}}}
                    >
                        INTERSECCION ECHOES viaxa a Arxentina{" "}
                    </Box>
                    
                    
                    <Box 
                        component={Link}
                        to="/noticia/comienza-miradas-diversas-a-coruna"
                        sx={{textAlign: 'end', my: 0.7, textDecoration: 'none', color: 'inherit', '&:hover': {fontWeight: 700, color:"white"}}}
                    >
                        Comeza Miradas Diversas A Coruña{" "}
                    </Box>
                    
                    
                    <Box 
                        component={Link}
                        to="/noticia/abiertas-las-convocatorias-para-participar-en-interseccion"
                        sx={{textAlign: 'end', my: 0.7, textDecoration: 'none', color: 'inherit', '&:hover': {fontWeight: 700, color:"white"}}}
                    >
                        Abertas as convocatorias para participar en INTERSECCIÓN{" "}
                    </Box>
                    
                    
                    <Box 
                        component={Link}
                        to="/noticia/interseccion-echoes-viaja-a-uruguay"
                        sx={{textAlign: 'end', my: 0.7, textDecoration: 'none', color: 'inherit', '&:hover': {fontWeight: 700, color:"white"}}}
                    >
                        {" "}
                        INTERSECCIÓN ECHOES viaxa a Uruguay
                    </Box>
                    
                </Box>
            </Box>

            {/* -------------------------------------------------------------------------- */
            /*                                  ECHOES                                     */
            /* -------------------------------------------------------------------------- */}

            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', width: '100%', mt: 1}}>
                <Box 
                    className="expandir-icono"
                    onClick={() => {
                        dispatch(setDesplegablesEchoes(!desplegableEchoes))
                    }}
                    sx={{
                        fontSize: '25px',
                        fontWeight: 900,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mr:-1
                    }}
                >
                    <Box 
                        component={Link} 
                        to="/echoes" 
                        sx={{textDecoration:'none', color: 'inherit', '&:hover':{fontWeight: 900, color: "white"}}}
                    >
                        ECHOES
                    </Box>
                    {desplegableEchoes 
                        ? <ExpandLessIcon sx={{ fontSize: "40px", mt: 0.2,'&:hover':{fontWeight:'bold'}}}/> 
                        : <ExpandMoreIcon sx={{ fontSize: "40px", mt: 0.2 }} />} 
                </Box>
            </Box>
            
            {/* -------------------------------------------------------------------------- */
            /*                                  OPEN CALL                                  */
            /* -------------------------------------------------------------------------- */}

            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', width: '100%', mt: 1}}>
                <Box 
                    component={Link} 
                    to="/open-call"
                    sx={{
                        fontSize: '25px',
                        fontWeight: 900,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: 'inherit',
                        '&:hover':{fontWeight: 900, color: "white"}
                    }}
                >
                    OPEN CALL
                </Box>
            </Box>
            
            
            {/* -------------------------------------------------------------------------- */
            /*                                  OPEN CALL LAB                              */
            /* -------------------------------------------------------------------------- */}

            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', width: '100%', mt: 1}}>
                <Box 
                    component={Link} 
                    to="/open-call-lab"
                    sx={{
                        fontSize: '25px',
                        fontWeight: 900,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: 'inherit',
                        '&:hover':{fontWeight: 900, color: "white"}
                    }}    
                >
                    OPEN CALL LAB
                </Box>
            </Box>

        

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
      </Box>
  );
};

export default DesplegablesHeader;
