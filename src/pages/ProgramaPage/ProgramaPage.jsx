import TituloBannerMove from "../../components/TituloBannerMove";
import { BASE_URL_BBDD, BASIC_URL } from "../../App";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetSectionsQuery,
  useGetSessionsByIdSectionQuery,
} from "../../services/api";
import { LocationCity, LocationOn } from "@mui/icons-material";
import { setDesplegablesPrograma } from "../../redux/slices/configurationSlice";

export const ProgramaPage = () => {
  const selectedColor = useSelector((state) => state.configuration.color);

  const dispatch = useDispatch();
  dispatch(setDesplegablesPrograma(true));


  const { id: idSection } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetSectionsQuery({}, {});

  const [activeSection, setActiveSection] = useState(null);

  // Nuevo estado para rastrear la imagen activa de cada sección
  const [activeImages, setActiveImages] = useState({});   

  !isLoading && console.log(data);

  // DECLARAR DATA QUE VENGA DE LAS SECTIONS Y OBTENER LOS ARRAYS QUE VENGAN DEL BACK:
  // dataSections
  // dataSessions
  // dataFilms

  // HAcen falta los 3 endpoints ya que en la pagina de programa donde se muestran las secciones aparece toda la informacion de las subcategorias.

  // customHooks creados con axios y react query
  /* const {isLoading: isLoadingSections, data: dataSections} = useGetSections();
    const {isLoading: isLoadingSessions, data: dataSessions} = useGetSessions();
    const {isLoading: isLoadingFilms, data: dataFilms} = useGetFilms(); */

    const darkMode = useSelector((state) => state.configuration.darkMode);

  return (
    <>
        <section >
            <Box >
            <TituloBannerMove
                titulo={
                <Box
                    sx={{
                        color: darkMode ? "white" : "black",
                        cursor: "default",
                        fontWeight: 900,
                        fontSize: {
                            xs: '80px',
                            md: '100px',
                            lg: '150px',
                            xl: '180px'
                        },
                    }}
                >
                    PROGRAMA &nbsp; PROGRAMA &nbsp; PROGRAMA &nbsp; PROGRAMA &nbsp;
                    PROGRAMA &nbsp; PROGRAMA &nbsp; PROGRAMA &nbsp; PROGRAMA &nbsp;
                    PROGRAMA &nbsp; PROGRAMA &nbsp; PROGRAMA &nbsp; PROGRAMA &nbsp;
                    PROGRAMA &nbsp; PROGRAMA &nbsp; PROGRAMA &nbsp; PROGRAMA &nbsp;
                </Box>
                }
                speed={60}
            />
            </Box>
        </section>

        <Grid container spacing={5} className="secciones" sx={{pt: 5, pl: 10, width: '100%', justifyContent: 'start'}}>
                {isLoading 
                    ? <Typography>Hola</Typography>
                    : (data?.data?.sections?.sections?.map((section) => (
                        <Grid item  xs={12} md={6} xl={4} sx={{minWidth: '700px', width: '100%'}}>
                            <Grid
                                sx={{ width: '100%' }}
                                component={Link}
                                to={`/section`}
                            >
                                <Box sx={{ width: '100%', height: '250px', overflow: 'hidden', position: 'relative',borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                                    <img
                                        style={{ 
                                            width: '100%', 
                                            minHeight: '100%', 
                                            objectFit: 'cover',   
                                            WebkitFilter: 'grayscale(100%)',
                                            filter: 'grayscale(100%) brightness(50%)' 
                                        }}
                                        src={activeImages[section.id] || `${BASE_URL_BBDD}/${section.image}`}
                                        alt="foto de Noticia"
                                    
                                />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '-5px',
                                            pl: 2,
                                            width: '100%',
                                            overflowWrap: 'break-word', 
                                            fontSize: '70px',
                                            fontWeight: '900',
                                            color: 'white',
                                            lineHeight: 1.6,
                                            textShadow: '6px 6px 15px black',
                                            "&:hover": { color: selectedColor }
                                        }}
                                    >
                                        {section.title}
                                    </Box>
                                </Box>
                                
                                </Grid>
                        
                        {
                            section.sessions.map((sesion) => (
                                <Box
                                    sx={{ 
                                        fontWeight: '300',
                                        fontSize: '15px',
                                      
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        cursor: 'url("./images/faviconInterseccionBold.png") 20 20, auto',
                                        color: 'white',
                                        backgroundColor: selectedColor,
                                        borderBottom: darkMode ? '2px solid black' : '2px solid white' 
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: '25px',
                                            fontWeight: '900',
                                            my: 1,
                                            mx: 2,
                                            color: 'white',
                                            textDecoration: 'none',
                                            textTransform: 'uppercase'
                                        }}
                                        onMouseOver={() => {
                                        // Actualizamos activeImages solo para esta sección
                                            setActiveImages((prevActiveImages) => ({
                                                ...prevActiveImages,
                                                [section.id]: `${BASE_URL_BBDD}/${sesion.image}`,
                                            }));
                                        }}
                                        onMouseLeave={() => {
                                        // Restablecemos activeImages solo para esta sección cuando el ratón sale de la sesión
                                            setActiveImages((prevActiveImages) => ({
                                                ...prevActiveImages,
                                                [section.id]: null,
                                            }));
                                        }}
                                    >
                                        <Box
                                            component={Link}
                                            to={`/sesion`} /* /${sesion.id} */
                                            sx={{ 
                                                textDecoration: "none", 
                                                fontSize: '25px',
                                                fontWeight: '900',
                                                marginTop: '5px',
                                                color: 'white',
                                            }}
                                        >
                                            {sesion.title}
                                        </Box>
                                        <Grid 
                                            container 
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'start',
                                                fontSize: '16px',
                                                height: '16px',
                                                fontWeight: '600',
                                                mt: 0.5,
                                                marginBottom: '6px',
                                                
                                            }}
                                        >
                                            <Grid item xs={3.5}> {sesion.weekDay}&nbsp;&nbsp; {new Date(sesion.date).getDate()} </Grid>
                                            <Grid item xs={2}>{sesion.hour.slice(0, -3)}</Grid>
                                            <Grid item xs={5.5} sx={{display: 'flex', flexDirection: 'row', alignSelf: 'start'}}>
                                                <LocationOn sx={{position: 'relative', bottom:'8px', mr: 1}}/>
                                                {sesion.place}
                                            </Grid>
                                            <Grid item xs={1} sx={{textAlign:'end'}}>{sesion.duration}'</Grid>
                                        </Grid>
                                    </Box>

                                    {
                                        sesion?.films?.map((film) => (
                                            <Grid container 
                                                sx={{ color: darkMode ? 'black' : 'white', backgroundColor: darkMode ? 'white' : 'black', px: 2, py: 1, borderBottom: darkMode ? '1px solid black' : '1px solid white', fontSize: 14}} 
                                                onMouseOver={() => {
                                                // Actualizamos activeImages solo para esta sección
                                                    setActiveImages((prevActiveImages) => ({
                                                        ...prevActiveImages,
                                                        [section.id]: `${BASE_URL_BBDD}/${film.image}`,
                                                    }));
                                                }}
                                                onMouseLeave={() => {
                                                // Restablecemos activeImages solo para esta sección cuando el ratón sale de la sesión
                                                    setActiveImages((prevActiveImages) => ({
                                                        ...prevActiveImages,
                                                        [section.id]: null,
                                                    }));
                                                }}
                                            >
                                                <Grid item xs={7} sx={{fontWeight: '600', pr: 2}}>{film.title}</Grid>
                                                <Grid item xs={3} sx={{pr: 1}}>{film.director}</Grid>
                                                <Grid item xs={1} sx={{display: 'flex', justifyContent: 'end'}}>{film.year}</Grid>
                                                <Grid item xs={1} sx={{display: 'flex', justifyContent: 'end'}}>{film.duration}'</Grid>
                                            </Grid>
                                        ))
                                    }

                                    
                                    
                                </Box>

                            ))
                        }

                        
                        </Grid>
                    )))
                }
        </Grid>
    </>
  );
};



/* 
<Grid container sx={{ backgroundColor: 'black', px: 2, py: 1, borderBottom: '1px solid white', fontSize: 14}}>
    <Grid xs={7} sx={{fontWeight: '600'}}>Water, sand, skin, a red bucket and a wasteland lorem100</Grid>
    <Grid xs={3}>Pablo Agma y Raquel Álvarez</Grid>
    <Grid xs={1} sx={{display: 'flex', justifyContent: 'end'}}>2020</Grid>
    <Grid xs={1} sx={{display: 'flex', justifyContent: 'end'}}>10'</Grid>
</Grid>
<Grid container sx={{ backgroundColor: 'black', px: 2, py: 1, borderBottom: '1px solid white', fontSize: 14}}>
    <Grid xs={7}>Water, sand, skin, a red bucket and a wasteland</Grid>
    <Grid xs={3}>Pablo Agma y Raquel Álvarez</Grid>
    <Grid xs={1} sx={{display: 'flex', justifyContent: 'end'}}>2020</Grid>
    <Grid xs={1} sx={{display: 'flex', justifyContent: 'end'}}>10'</Grid>
</Grid>
<Grid container sx={{ backgroundColor: 'black', px: 2, py: 1, borderBottom: '1px solid white', fontSize: 14}}>
    <Grid xs={7}>Water, sand, skin, a red bucket and a wasteland</Grid>
    <Grid xs={3}>Pablo Agma y Raquel Álvarez</Grid>
    <Grid xs={1} sx={{display: 'flex', justifyContent: 'end'}}>2020</Grid>
    <Grid xs={1} sx={{display: 'flex', justifyContent: 'end'}}>10'</Grid>
</Grid> */