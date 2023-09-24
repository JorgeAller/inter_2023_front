import { useState, useEffect } from "react";

import "./style.css";

import BotonesNegros from "../BotonesNegros";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import { BotonesIdioma } from "../BotonesIdioma/BotonesIdioma";
import { BASIC_URL } from "../../App";
import { Box, Drawer, Modal, Paper, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import SideBar from "../SideBar";
import CustomModal from "../CustomModal";
import LogoInterseccion from "../LogoInterseccion";

const BurgerMenu = () => {

    const darkMode = useSelector((state) => state.configuration.darkMode)
    const selectedColor = useSelector((state) => state.configuration.color)

    /* ###########################################################
    ############# DECLARACIONES DE TRADUCCIONES ##################
    ############################################################## */
    const intl = useIntl();
    const fecha = intl.formatMessage({ id: "fecha" });
    const lugar = intl.formatMessage({ id: "lugar" });
    const noticias = intl.formatMessage({ id: "noticias" });
    const burgerMenuMas = intl.formatMessage({id: "burgerMenuMas"})
    const burgerMenuMenos = intl.formatMessage({id: "burgerMenuMenos"})
    const burgerMenuCosas = intl.formatMessage({id: "burgerMenuCosas"})

    /* ############################################################
    ############# FIN DELCARACIONES DE TRADUCCIONES ###############
    ############################################################### */

    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem("selectedLang")
    );
    

    const [showModal, setShowModal] = useState(false);
    const [showHeader, setShowHeader] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };
    
    const handleCloseMobile = () => {
        setShowHeader(false)
    };

    const closeModal = () => {setShowModal(false)}


    const isScreenSizeXSorSM = useMediaQuery(useTheme().breakpoints.down('md'));

    const sizeMD = useTheme().breakpoints.values.md;

    const handleResizeHeader = () => {
        if (window.innerWidth >= sizeMD && showHeader) {
            setShowHeader(false);
        }
    };

    const handleResizeModal= () => {
        if (window.innerWidth <= sizeMD && showModal) {
            setShowModal(false);
        }
    };

    const handleResize = () => {
        handleResizeHeader();
        handleResizeModal();
    };
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [showHeader, showModal]);
   
    const location = useLocation();

    // Resto de tu código...

    const handleURLChange = () => {
        setShowHeader(false);
    };

    useEffect(() => {
        // Esta función se ejecutará cuando cambie la URL
        handleURLChange();
    }, [location]);
   




   

    return (
        <>
            <Box 
                sx={{
                    mt: '10px',
                    fontSize: {
                    xs: '25px',
                    md: '40px',
                    },
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    WebkitTextStroke: {
                        xs: showHeader ? 'none' : darkMode ? '1px white' : '1px black',
                        md: darkMode ? '2px white' : '2px black'
                    },
                    color: {
                        xs: showHeader ? 'black' : selectedColor,
                        md: darkMode ? 'black' : 'white'
                    },
                    textAlign: 'center',
                    zIndex: 400,
                    '&:hover': {
                        color: darkMode ? 'white' : 'black',
                        WebkitTextStroke: '0px',
                    }
                }}
                onClick={()=>{
                    if(isScreenSizeXSorSM){
                        setShowHeader(!showHeader)
                    }

                    if(!isScreenSizeXSorSM){
                        setShowModal(!showModal);
                    }
                }}
            >
                <Box
                    sx={{ lineHeight: "1.5" }}
                >
                    {showHeader || showModal ? burgerMenuMenos : burgerMenuMas}
                </Box>
                <Box
                    sx={{ lineHeight: "1", position: "relative", bottom: "10px" }}
                >
                    {burgerMenuCosas}
                </Box>
            </Box>
        
        
                <Modal 
                    open={showModal}
                    onClose={handleClose}
                    sx={{
                        width: '60vw',
                        height: '60vw',
                        maxWidth: '80vh',
                        maxHeight: '80vh',
                        boxShadow: '2px 2px 40px rgb(15, 49, 29)',
                        background: 'linear-gradient(-45deg, rgb(140, 203, 167), rgb(31, 138, 75), rgb(36, 126, 73), rgb(25, 78, 47))',
                        backgroundSize: '300% 300%',

                        borderRadius: '100%',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',

                        animation: 'zoom-in-zoom-out 1s ease-out, change 10s ease-in-out infinite',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '2rem',
                    }}
                >
                    <Box 
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflowY: 'auto',
                            zIndex: '5000',
                        }}
                    >
                        <BotonesIdioma selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/>
                        <div className="botonesNegrosModal">
                        <BotonesNegros></BotonesNegros>
                        </div>
                        <ul className="listaContenido">
                        <li>
                            <Link to={'/open-call'} onClick={()=>closeModal()} style={{textTransform: "uppercase"}}>OPEN CALL</Link>
                        </li>
                        <li>
                            <Link to={'/open-call-lab'} onClick={()=>closeModal()} style={{textTransform: "uppercase"}} >
                            OPEN CALL LAB
                            </Link>{" "}
                        </li>
                        <li>
                            <Link to={'/noticias'} onClick={()=>closeModal()} style={{textTransform: "uppercase"}} >{noticias}</Link>
                        </li>
                        <li>
                            <Link to={'/info/quienes-somos'} onClick={()=>closeModal()} style={{textTransform: "uppercase"}} >{intl.formatMessage({id:"quenSomos-titulo"})}</Link>{" "}
                        </li>
                        <li>
                            <Link to={'/info/sostenibilidad'} onClick={()=>closeModal()} style={{textTransform: "uppercase"}} >{intl.formatMessage({id:"sostenibilidad-titulo"})}</Link>{" "}
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
                    </Box>
                </Modal>
                
                {showHeader &&  
                    <Box sx={{position: 'absolute', zIndex: 2000, top: '71px', left: '0px'}} >
                        <SideBar width={'100%'}/>
                    </Box>
                }
               
               
        </>
    );
};

export default BurgerMenu;
