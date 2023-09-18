import { useSelector } from 'react-redux';
import TituloBannerMove from '../../components/TituloBannerMove/index.jsx'
import "./style.css"
import { Grid, Box, Typography, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { BASE_URL_BBDD, BASIC_URL } from "../../App.jsx";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    useGetFilmsQuery,
    useGetSectionQuery,
  useGetSectionsQuery,
  useGetSessionsByIdSectionQuery,
} from "../../services/api.js";
import { Add, LocationOn } from '@mui/icons-material';
import { useEffect } from 'react';

export const SectionPage = () => {


    const {darkMode, color: selectedColor} = useSelector((state)=>state.configuration)
    const isScreenSizeXSorSM = useMediaQuery(useTheme().breakpoints.down('md'))
    const navigate = useNavigate();


    const { idSection } = useParams();

    const { data: dataFilms, isLoading: isLoadingFilms, refetch: refetchFilms, isRefetching: isRefetchingFilms } = useGetFilmsQuery({},{})
    const { data: dataSessions, isLoading: isLoadingSessions, refetch: refetchSessions, isRefetching: isRefetchingSessions } = useGetSessionsByIdSectionQuery({}, {idSection})
    const { data: dataSection, isLoading: isLoadingSection, refetch: refetchSection, isRefetching: isRefetchingSection } = useGetSectionQuery({}, {idSection})

    useEffect(() => {
        if (idSection) {
            refetchFilms();
            refetchSessions();
            refetchSection();
        }
    }, [idSection]);
    const [activeImages, setActiveImages] = useState({});  

    console.log(idSection);
    !isLoadingSection && console.log(dataSection);

    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleOpenModal = (index) => {
        setExpandedIndex(index);
    };
  
    const handleCloseModal = () => {
        setExpandedIndex(null);
    };
    
  return (
    <>
        <Box >
          <TituloBannerMove
            titulo={
              <Box
                sx={{
                  color: "black",
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
                {dataSection?.data?.section[0]?.title}  &nbsp; {dataSection?.data?.section[0]?.title}  &nbsp; {dataSection?.data?.section[0]?.title}  &nbsp; {dataSection?.data?.section[0]?.title}  &nbsp;
                {dataSection?.data?.section[0]?.title}  &nbsp; {dataSection?.data?.section[0]?.title}  &nbsp; {dataSection?.data?.section[0]?.title}  &nbsp; {dataSection?.data?.section[0]?.title}  &nbsp;
                {dataSection?.data?.section[0]?.title}  &nbsp; {dataSection?.data?.section[0]?.title}  &nbsp; {dataSection?.data?.section[0]?.title}  &nbsp; {dataSection?.data?.section[0]?.title}  &nbsp;
                {dataSection?.data?.section[0]?.title}  &nbsp; {dataSection?.data?.section[0]?.title}  &nbsp; {dataSection?.data?.section[0]?.title}  &nbsp; {dataSection?.data?.section[0]?.title}  &nbsp;
              </Box>
            }
            speed={80}
            />
        </Box>
        
        {isLoadingSection && isRefetchingSection
            ? <Typography> HOLA</Typography> 
            : dataSection?.data?.section?.map((section) => (
                section.type === 'FOCO' && 
                    <Box sx={{display:'flex', justifyContent:'center', p:{xs:5, md: 0}}}>
                        <Grid container sx={{mx:{ md:10 },  mb: {xs: 3, sm: 0},  mt: 7, borderRadius: 5, bgcolor: selectedColor, border: '1px solid black', width: '100%'}}>

                            <Grid 
                                sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                                lg={6}
                                item
                            >
                                <Grid component='img' src={`${BASIC_URL}/images/lab_2022.jpg`}sx={{width: '100%', p: 4, borderRadius:'20px'}} />
                            </Grid>

                            <Grid lg={6} item sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', pl: {xs: 4, lg:0 },pr: 4, pt: {xs: 0, lg: 4}, pb:2 }}>

                                    { section.bio &&
                                        <Grid >

                                            <Typography variant='h4' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', bgcolor: selectedColor, borderTopRightRadius:'20px',borderTopLeftRadius:'20px', color: 'white', lineHeight: '40px', fontSize: '24px', fontWeight: '900', pl: 3, border: '1px solid white'}}>
                                                BIOGRAFÍA 
                                                {section.bio?.length > 150 && (
                                                    <IconButton sx={{color: 'white', fontSize: '24px', fontWeight: '24px'}} onClick={() => handleOpenModal(index)}>
                                                        <Add sx={{'&:hover': {fontWeight: 900}}}/>
                                                    </IconButton>
                                                )}
                                            </Typography>

                                            <Typography noWrap={true} sx={{ px: 3, pt: 1, pb: 2, mb:2 ,height: '110px', overflow: 'ellipsis', bgcolor: 'white',  borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px',  textOverflow: 'ellipsis', whiteSpace: 'pre-line', display: '-webkit-box', WebkitLineClamp: 4,  WebkitBoxOrient: 'vertical' }}>
                                                {section.bio}
                                            </Typography>

                                        </Grid>
                                    }

                                    { section.cur_text &&
                                        <Grid >

                                            <Typography variant='h4' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', bgcolor: selectedColor, borderTopRightRadius:'20px',borderTopLeftRadius:'20px', color: 'white', lineHeight: '40px', fontSize: '24px', fontWeight: '900', pl: 3, border: '1px solid white'}}>
                                                TEXTO CURATORIAL 
                                                {section.cur_text?.length > 150 && (
                                                    <IconButton sx={{color: 'white', fontSize: '24px', fontWeight: '24px'}} onClick={() => handleOpenModal(index)}>
                                                        <Add sx={{'&:hover': {fontWeight: 900}}}/>
                                                    </IconButton>
                                                )}
                                            </Typography>

                                            <Typography noWrap={true} sx={{ px: 3, pt: 1, pb: 2, mb:2 ,height: '110px', overflow: 'ellipsis', bgcolor: 'white',  borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px',  textOverflow: 'ellipsis', whiteSpace: 'pre-line', display: '-webkit-box', WebkitLineClamp: 4,  WebkitBoxOrient: 'vertical' }}>
                                                {section.cur_text}
                                            </Typography>

                                        </Grid>
                                    }

                                    { section.sponsors &&
                                        <Grid >

                                            <Typography variant='h4' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', bgcolor: selectedColor, borderTopRightRadius:'20px',borderTopLeftRadius:'20px', color: 'white', lineHeight: '40px', fontSize: '24px', fontWeight: '900', pl: 3, border: '1px solid white'}}>
                                                CON LA COLABORACIÓN DE: 
                                            </Typography>

                                            <Typography noWrap={true} sx={{ px: 3, pt: 1, pb: 2, mb:2 ,height: '110px', overflow: 'ellipsis', bgcolor: 'white',  borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px',  textOverflow: 'ellipsis', whiteSpace: 'pre-line', display: '-webkit-box', WebkitLineClamp: 4,  WebkitBoxOrient: 'vertical' }}>
                                                {section.images && 
                                                    <Box sx={{height: '100%', display:'flex', flexDirection: 'row', justifyContent: 'space-between'}} cols={3} >
                                                        {item.images.map((image) => (
                                                            <Box sx={{height: '100%', display: 'flex'}} key={image.src}>
                                                                <img
                                                                src={image.src}
                                                                alt={image.alt}
                                                                loading="lazy"
                                                                height='100%'
                                                                width='100%'
                                                                />
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                }
                                            </Typography>

                                        </Grid>
                                    }
                            
                            </Grid>

                            {expandedIndex !== null && (
                                <Modal
                                    open={expandedIndex !== null}
                                    onClose={handleCloseModal}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Paper sx={{display: 'flex', flexDirection: 'column', width: '50%', borderRadius: '20px'}}>
                                        <Typography variant="h4" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',bgcolor: selectedColor, color: 'white', fontWeight: '900',pl: 5, pr: 1, py: 1, borderTopRadiusLeft: '20px', borderTopLeftRadius: '20px'}}>
                                            TEXTO CURATORIAL
                                            <IconButton sx={{color: 'white', fontSize: '24px', fontWeight: '24px'}} onClick={() => handleCloseModal()}>
                                                <Remove sx={{'&:hover': {fontWeight: 900}}}/>
                                            </IconButton>
                                        </Typography>
                                        <Typography sx={{ px: 5, pt: 2.5,  pb: 3}}>
                                            {section[expandedIndex].cur_text}
                                        </Typography>
                                        
                                        {/* <Button sx={{alignSelf: 'center', fontSize: '24px', color: selectedColor, my: 2, '&:hover': {cursor: 'url("./images/faviconInterseccionBold.png") 20 20, auto'}}} onClick={() => handleCloseModal()}>
                                            VOLVER
                                        </Button> */}
                                    </Paper>
                                </Modal>
                            )}
                    
                        </Grid>
                    </Box>
            ))
        }


                
            {isLoadingSessions && isLoadingFilms && isRefetchingFilms && isRefetchingSessions
                ? <Typography>Hola</Typography>
                : <Box sx={{display:'flex', justifyContent: {xs: 'center', md: 'start'}, mt: {md: 10}}}>
                    <Grid container spacing={5} className="secciones" sx={{ pl: {md: 10}, pb: 10, width: '95%', justifyContent: 'start'}}>
 
                        {dataSessions?.data?.sessions.map((session) => (
                            
                            <Grid item  xs={12} md={6} xl={4} sx={{minWidth: {xs: '300px', md: '700px'}, width: '100%'}}>

                                <Grid
                                    sx={{ width: '100%' }}
                                    component={Link}
                                    to={`/sesion/${session.id}`} /* /${sesion.id} */
                                >
                                    <Box sx={{ width: '100%', height:  {xs: '200px', md: '250px'}, overflow: 'hidden', position: 'relative', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'  }}>
                                        <img
                                            style={{ 
                                                width: '100%', 
                                                minHeight: '100%', 
                                                objectFit: 'cover',   
                                                WebkitFilter: 'grayscale(100%)',
                                                filter: 'grayscale(100%) brightness(50%)' 
                                            }}
                                            src={activeImages[session.id] || `${BASE_URL_BBDD}/${session.name}`}
                                            alt="foto de Noticia"
                                    />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '-5px',
                                                pl: 2,
                                                width: '100%',
                                                overflowWrap: 'break-word', 
                                                fontSize: {
                                                xs: '50px',
                                                md: '70px'
                                                },
                                                fontWeight: '900',
                                                color: 'white',
                                                lineHeight: 1.6,
                                                textShadow: '6px 6px 15px black',
                                                "&:hover": { color: selectedColor }
                                            }}
                                        >
                                            {session.title}
                                        </Box>
                                    </Box>
                                    
                                </Grid>

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
                                    >
                                        
                                        <Grid 
                                            container 
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                mt: 0.5,
                                                marginBottom: '6px',
                                                
                                            }}
                                        >
                                            <Grid item xs={5} md={4}> {session.weekDay}&nbsp;&nbsp; {new Date(session.date).getDate()} </Grid>
                                            <Grid item xs={2} md={2}>{session.hour.slice(0, -3)}</Grid>
                                            <Grid item xs={3.5} md={4.5} sx={{display: 'flex', flexDirection: 'row', alignSelf: 'start', }}>
                                                {!isScreenSizeXSorSM && <LocationOn sx={{position: 'relative', bottom:'2px',  mr: 1}}/>}
                                                {<p style={{whiteSpace: 'nowrap', overflow: 'hidden'}}> {session.place}</p>}
                                            </Grid>
                                            <Grid item xs={1.5} md={1} sx={{textAlign:'end'}}>{session.duration}'</Grid>
                                        </Grid>
                                    </Box>

                                    {
                                        dataFilms?.data?.films?.filter(film => film.idSession === session.id).map((film) => (
                                            <Grid container 
                                                sx={{ backgroundColor: 'black', px: 2, py: 1, borderBottom: '1px solid white', fontSize: 14}} 
                                                onMouseOver={() => {
                                                // Actualizamos activeImages solo para esta sección
                                                    setActiveImages((prevActiveImages) => ({
                                                        ...prevActiveImages,
                                                        [session.id]: `${BASE_URL_BBDD}/${film.name}`,
                                                    }));
                                                }}
                                                onMouseLeave={() => {
                                                // Restablecemos activeImages solo para esta sección cuando el ratón sale de la sesión
                                                    setActiveImages((prevActiveImages) => ({
                                                        ...prevActiveImages,
                                                        [session.id]: null,
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

                            </Grid>
                                
                        ))}
                    </Grid> 
                </Box>
                
            }
                    
    </>    
  )
}



{/* <Box className="generalsession" style={{backgroundColor: selectedColor}}>
<Box className="tituloSesion" >
  <Box component={Link} to={'/sesion'} sx={{textDecoration: 'none', color: 'inherit'}}>
    TÍTULO DE LA SESIÓN
  </Box>
</Box>

<Box className="informacionSesionSinTitulo">
  <p className="fechaSesion">MARTES 10</p>
  <p className="horaSesion">20:30</p>
  <p className="lugarSesion">FUNDACIÓN LUIS SEOANE</p>
</Box>

<Box className="obraSesión">
  {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION 
  <p className="tituloObra">Titulo de una obra larguisima</p>
  <p className="autorObra">Perico de los palotes</p>
  <p className="añoObra">2020</p>
  <p className="duracionObra">30`</p>
</Box>


</Box>

<Box className="generalSesion" style={{backgroundColor: selectedColor}}>
<Box className="tituloSesion" >
  <Box component={Link} to={'/sesion'} sx={{textDecoration: 'none', color: 'inherit'}}>
    TÍTULO DE LA SESIÓN
  </Box>
</Box>

<Box className="informacionSesionSinTitulo">
  <p className="fechaSesion">MARTES 10</p>
  <p className="horaSesion">20:30</p>
  <p className="lugarSesion">FUNDACIÓN LUIS SEOANE</p>
</Box>

<Box className="obraSesión">
  {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION 
  <p className="tituloObra">Titulo de una obra larguisima</p>
  <p className="autorObra">Perico de los palotes</p>
  <p className="añoObra">2020</p>
  <p className="duracionObra">30`</p>
</Box>
<Box className="obraSesión">
  {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION 
  <p className="tituloObra">Titulo de una obra larguisima</p>
  <p className="autorObra">Perico de los palotes</p>
  <p className="añoObra">2020</p>
  <p className="duracionObra">30`</p>
</Box>
<Box className="obraSesión">
  {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION 
  <p className="tituloObra">Titulo de una obra larguisima</p>
  <p className="autorObra">Perico de los palotes</p>
  <p className="añoObra">2020</p>
  <p className="duracionObra">30`</p>
</Box>
<Box className="obraSesión">
  {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION 
  <p className="tituloObra">Titulo de una obra larguisima</p>
  <p className="autorObra">Perico de los palotes</p>
  <p className="añoObra">2020</p>
  <p className="duracionObra">30`</p>
</Box>

</Box> */}
