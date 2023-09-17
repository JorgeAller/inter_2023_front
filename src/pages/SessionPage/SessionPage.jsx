    import { useSelector } from 'react-redux';
    import TituloBannerMove from '../../components/TituloBannerMove/index.jsx'
    import "./style.css"
    import { Grid, Box, Typography, IconButton, Modal, Paper, Button, ImageList, ImageListItem, alpha } from '@mui/material';
    import { BASE_URL_BBDD, BASIC_URL } from "../../App.jsx";
    import { useState } from "react";
    import { Link, useNavigate, useParams } from "react-router-dom";
    import {
    useGetSectionsQuery,
    useGetSessionsByIdSectionQuery,
    } from "../../services/api.js";
    import { Add, ExpandLess, ExpandMore, PlusOne, Remove } from '@mui/icons-material';

    export const SessionPage = () => {

        const selectedColor = useSelector((state)=>state.configuration.color)
        const navigate = useNavigate();


        const { id: idSection } = useParams();

        const { data, isLoading } = useGetSectionsQuery({}, {});
        const [imageSection, setImageSection] = useState("")
    // AÑADIR DURACION SESION

        const bioData = [
            {
                title: 'BIOGRAFÍA ',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, a? Autem itaque iusto officiis error nihil! Natus praesentium fugit aliquam. Omnis consectetur hic quibusdam praesentium corrupti neque error repellendus illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure consequuntur soluta, nemo autem assumenda maxime dolore, sit non dolorum provident tempore aperiam ipsa voluptatibus labore quasi suscipit! Modi, ratione Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure consequuntur soluta, nemo autem assumenda maxime dolore, sit non dolorum provident tempore aperiam ipsa voluptatibus labore quasi suscipit! Modi, ratione Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores repellendus voluptas aperiam rerum harum quia praesentium iste? Asperiores maiores quaerat alias reiciendis vitae nemo neque nihil excepturi inventore dolore!',
            },
            {
                title: 'TEXTO CURATORIAL',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, a? Autem itaque iusto officiis error nihil! Natus praesentium fugit aliquam.  ',
            },
             {
                title: 'CON LA COLABORACIÓN DE:',
                content: '',
                images: [
                    {
                        alt: 'foto1' ,
                        src: `${BASIC_URL}/images/goya.png`
                    },
                    {
                        alt: 'foto2',
                        src: `${BASIC_URL}/images/LAIDA.png`
                    },
                    {
                        alt: 'foto2',
                        src: `${BASIC_URL}/images/MARIA.png`
                    },
                ],
            }, 
            // Agrega más elementos aquí si es necesario
        ];

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
                            INTERNACIONAL  &nbsp; INTERNACIONAL  &nbsp; INTERNACIONAL  &nbsp; INTERNACIONAL  &nbsp;
                            INTERNACIONAL  &nbsp; INTERNACIONAL  &nbsp; INTERNACIONAL  &nbsp; INTERNACIONAL  &nbsp;
                            INTERNACIONAL  &nbsp; INTERNACIONAL  &nbsp; INTERNACIONAL  &nbsp; INTERNACIONAL  &nbsp;
                            INTERNACIONAL  &nbsp; INTERNACIONAL  &nbsp; INTERNACIONAL  &nbsp; INTERNACIONAL  &nbsp;
                        </Box>
                        }
                        speed={80}
                    />
                </Box>

                <Grid container sx={{mr:10, ml:10,  mt: 5, borderRadius: 5, bgcolor: selectedColor, border: '1px solid black', width: 'calc(100% - 155px)'}}>

                        <Grid 
                            sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                            lg={6}
                            item
                        >
                            <Grid component='img' src={`${BASIC_URL}/images/lab_2022.jpg`} sx={{width: '100%', p: 4}} />
                        </Grid>

                        <Grid lg={6} item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pr: 4, pt: 4, pb:2 }}>
                            {bioData.map((item, index) => (
                                <Grid key={index}>

                                    <Typography variant='h4' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', bgcolor: selectedColor, borderTopRightRadius:'20px',borderTopLeftRadius:'20px', color: 'white', lineHeight: '40px', fontSize: '24px', fontWeight: '900', pl: 3, border: '1px solid white'}}>
                                        {item.title}
                                        {item.content?.length > 150 && (
                                            <IconButton sx={{color: 'white', fontSize: '24px', fontWeight: '24px'}} onClick={() => handleOpenModal(index)}>
                                                <Add sx={{'&:hover': {fontWeight: 900}}}/>
                                            </IconButton>
                                        )}
                                    </Typography>

                                    <Typography noWrap={true} sx={{ px: 3, pt: 1, pb: 2, mb:2 ,height: '110px', overflow: 'ellipsis', bgcolor: 'white',  borderBottomRightRadius:'20px', borderBottomLeftRadius:'20px',  textOverflow: 'ellipsis', whiteSpace: 'pre-line', display: '-webkit-box', WebkitLineClamp: 4,  WebkitBoxOrient: 'vertical' }}>
                                    {item.content}
                                        {item.images && 
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
                            ))}
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
                                        {bioData[expandedIndex].title}
                                        <IconButton sx={{color: 'white', fontSize: '24px', fontWeight: '24px'}} onClick={() => handleCloseModal()}>
                                            <Remove sx={{'&:hover': {fontWeight: 900}}}/>
                                        </IconButton>
                                    </Typography>
                                    <Typography sx={{ px: 5, pt: 2.5,  pb: 3}}>
                                        {bioData[expandedIndex].content}
                                    </Typography>
                                    
                                    {/* <Button sx={{alignSelf: 'center', fontSize: '24px', color: selectedColor, my: 2, '&:hover': {cursor: 'url("./images/faviconInterseccionBold.png") 20 20, auto'}}} onClick={() => handleCloseModal()}>
                                        VOLVER
                                    </Button> */}
                                </Paper>
                            </Modal>
                        )}
                </Grid>

                <Grid container spacing={5}  sx={{pt: 10, pl: 10,pb: 10, width: '100%', justifyContent: 'start'}}>
                            {isLoading 
                                ? <Typography>Hola</Typography>
                                : (data?.data?.sections?.sections?.map((section) => (
                                    section.sessions.map((sesion)=> {
                                    return(
                                        <Grid item  xs={12} md={6} xl={4} sx={{minWidth: '700px', width: '100%'}}>
                                        <Grid
                                            sx={{ width: '100%' }}
                                            component={Link}
                                            to={`/sesion`} /* /${sesion.id} */
                                        >
                                            <Box sx={{ width: '100%', height: '250px', overflow: 'hidden', position: 'relative', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'  }}>
                                                <img
                                                    style={{ 
                                                        width: '100%', 
                                                        minHeight: '100%', 
                                                        objectFit: 'cover',   
                                                        WebkitFilter: 'grayscale(100%)',
                                                        filter: 'grayscale(100%) brightness(50%)' 
                                                    }}
                                                    src={imageSection}
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
                                                    {sesion.title}
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
                                                    borderBottom: '2px solid white' 
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
                                                            justifyContent: 'start',
                                                            fontSize: '16px',
                                                            fontWeight: '600',
                                                            mt: 0.5,
                                                            marginBottom: '6px',
                                                            
                                                        }}
                                                    >
                                                        <Grid item xs={3.5}>{new Date(sesion.date).getDate()} &nbsp;&nbsp; {sesion.weekDay} </Grid>
                                                        <Grid item xs={2}>{sesion.hour.slice(0, -3)}</Grid>
                                                        <Grid item xs={5.5}>{sesion.place}</Grid>
                                                        <Grid item xs={1}>{sesion.duration}'</Grid>
                                                    </Grid>
                                                </Box>

                                                {
                                                    sesion?.films?.map((film) => (
                                                        <Grid container 
                                                            sx={{ backgroundColor: 'black', px: 2, py: 1, borderBottom: '1px solid white', fontSize: 14}} 
                                                            onMouseOver={()=>setImageSection(film.image)}
                                                            onMouseLeave={()=>setImageSection(`${BASE_URL_BBDD}/${section.image}`/* `${BASIC_URL}/images/XISELA.png` */)}
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
                                    )
                                    })
                                
                                )))
                            }
                </Grid>  
            </>    
    )
    }

