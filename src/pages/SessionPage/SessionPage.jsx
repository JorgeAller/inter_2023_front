    import { useSelector } from 'react-redux';
    import TituloBannerMove from '../../components/TituloBannerMove/index.jsx'
    import { Grid, Box, Typography, IconButton, Modal, Paper, Button, ImageList, ImageListItem, alpha } from '@mui/material';
    import { BASE_URL_BBDD, BASIC_URL } from "../../App.jsx";
    import { useState } from "react";
    import { Link, useNavigate, useParams } from "react-router-dom";
    import {
        useGetFilmsByIdSessionQuery,
    useGetSectionsQuery,
    useGetSessionQuery,
    useGetSessionsByIdSectionQuery,
    } from "../../services/api.js";
    import { Add, ExpandLess, ExpandMore, PlusOne, Remove } from '@mui/icons-material';

    export const SessionPage = () => {

        const selectedColor = useSelector((state)=>state.configuration.color)
        const darkMode = useSelector((state)=>state.configuration.darkMode)
        const navigate = useNavigate();


        const { idSession } = useParams();
        console.log(idSession);
        const [imageSection, setImageSection] = useState("")

        const { data: dataSession, isLoading: isLoadingSession } = useGetSessionQuery({},{idSession})
        const { data: dataFilmsByIdSession, isLoading:  isLoadingFilmsByIdSession} = useGetFilmsByIdSessionQuery({},{idSession})

        !isLoadingFilmsByIdSession && console.log(dataFilmsByIdSession)
       

        const [expandedIndex, setExpandedIndex] = useState(null);


        const [activeImages, setActiveImages] = useState({});   


        const sessionTitle = dataSession?.data.session[0]?.title;

        return (
            <>
                 <Box >
                    <TituloBannerMove
                        titulo={
                        <Box
                            sx={{
                                color: darkMode ? 'white' : "black",
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
                            {sessionTitle}  &nbsp; {sessionTitle}  &nbsp; {sessionTitle}  &nbsp; {sessionTitle}  &nbsp;
                            {sessionTitle}  &nbsp; {sessionTitle}  &nbsp; {sessionTitle}  &nbsp; {sessionTitle}  &nbsp;
                            {sessionTitle}  &nbsp; {sessionTitle}  &nbsp; {sessionTitle}  &nbsp; {sessionTitle}  &nbsp;
                            {sessionTitle}  &nbsp; {sessionTitle}  &nbsp; {sessionTitle}  &nbsp; {sessionTitle}  &nbsp;
                        </Box>
                        }
                        speed={80}
                    />
                </Box>

                
                    {isLoadingFilmsByIdSession 
                        ? <Typography>HOLA</Typography>
                        : <Grid container spacing={4} sx={{pt:{xs:4, md: 8}, pl: {xs: 4, md: 10}, pb: {xs: 4, md: 10}}}>
                            {dataFilmsByIdSession?.data?.films?.map((film)=>(
                                <Grid item key={film.id} xs={12} md={6} xl={4} sx={{minWidth: {xs: '350px', md: '600px'}, maxWidth: {xs: '300px', md: '600px'} ,}}>
                                    
                                    {/* IMAGEN + TITULO + DIRECTOR + AÑO */}
                                    <Grid
                                        sx={{ width: '100%' }}
                                        component={Link}
                                        to={`/film/${film.id}`}
                                    >
                                        <Box sx={{ borderBottom: 'none', width: '100%', height: {xs: '200px', md: '250px'}, overflow: 'hidden', position: 'relative',borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                                            <img
                                                style={{ 
                                                    border: '2px solid black',
                                                    borderTopLeftRadius: '15px',
                                                    borderTopRightRadius: '15px',
                                                    width: '100%', 
                                                    minHeight: '100%', 
                                                    objectFit: 'cover',   
                                                    WebkitFilter: 'grayscale(100%)',
                                                    filter: 'grayscale(100%) brightness(50%)' 
                                                }}
                                                src={activeImages[film.id] || `${BASE_URL_BBDD}/${film.name}`}
                                                alt="foto de Noticia"
                                            />

                                            {/* TITULO */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: '15px',
                                                    pl: 2,
                                                    pr: 2,
                                                    width: '100%',
                                                    overflowWrap: 'break-word', 
                                                    fontSize: {
                                                        xs: '30px',
                                                        md: '50px'
                                                    },
                                                    textAlign: 'justify',
                                                    fontWeight: '900',
                                                    color: 'white',
                                                    lineHeight: 1,
                                                    textShadow: '6px 6px 15px black',
                                                    "&:hover": { color: selectedColor }
                                                }}
                                            >
                                                {film.title}
                                            </Box>

                                            {/* DIRECTOR */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: {xs: '175px', md: '215px'},
                                                    left: '0px',
                                                    pl: 2,
                                                    overflowWrap: 'break-word', 
                                                    fontSize: {
                                                        xs: '12px',
                                                        md: '20px'
                                                    },
                                                    fontWeight: '900',
                                                    color: 'white',
                                                    lineHeight: 1,
                                                    textShadow: '6px 6px 15px black',
                                                    "&:hover": { color: selectedColor },
                                                    textDecoration: 'none'
                                                }}
                                                component={Link}
                                                to={`/people/${film.id}`}
                                            >
                                                {film.director}
                                            </Box>

                                            {/* AÑO */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: {xs: '175px', md: '215px'},
                                                    left: {xs: '245px', md:'475px'},
                                                    pl: 2,
                                                    overflowWrap: 'break-word', 
                                                    fontSize: {
                                                        xs: '12px',
                                                        md: '20px'
                                                    },
                                                    fontWeight: '900',
                                                    color: 'white',
                                                    lineHeight: 1,
                                                    textShadow: '6px 6px 15px black',
                                                }}
                                            >
                                                {film.year}
                                            </Box>
                                        </Box>
                                        
                                    </Grid>
                                    
                                    {/* CAJA COLOR CON INFORMACION PELICULA */}
                                    <Grid 
                                        container 
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            fontSize: {
                                                xs: '13px',
                                                md: '16px'
                                            },
                                            fontWeight: '600',
                                            p: 1,
                                            px:2,
                                            backgroundColor: selectedColor,
                                            borderLeft: '2px solid black',
                                            borderRight: '2px solid black',
                                            color: 'white',
                                        }}
                                    >
                                        <Grid item xs={2} > {film.recording_format} </Grid>
                                        <Grid item xs={2} > {film.sound_format} </Grid>
                                        <Grid item xs={2} > {film.color_bn} </Grid>
                                        <Grid item xs={2} > {film.duration} </Grid>
                                        <Grid item xs={3} > {film.country} </Grid>
                                        <Grid item xs={1} textAlign={'end'} > {film.lang} </Grid>
                                    </Grid>

                                    {/* dESCRIPCION BREVE */}
                                    <Box 
                                        sx={{
                                            height: '150px', 
                                            border: '2px solid black', 
                                            borderTop: 'none',
                                            p: 2,
                                            position: 'relative',
                                            backgroundColor: 'white'
                                        }}
                                    >
                                        <Typography 
                                            sx={{
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                display: "-webkit-box",
                                                WebkitLineClamp: "5",
                                                WebkitBoxOrient: "vertical",
                                            }}
                                        >
                                            {film.short_desc}
                                        </Typography>
                                        {film.short_desc.length > 330  &&
                                            <IconButton sx={{position: 'absolute', left: '530px', top: '113px', zIndex: 10000}}>
                                                <Add sx={{color: selectedColor}}/>
                                            </IconButton>
                                        }
                                    </Box>

                                </Grid>
                            ))}
                        
                        </Grid> 
                    }

                
            </>    
    )
    }

