import { useSelector } from 'react-redux';
import TituloBannerMove from '../../components/TituloBannerMove/index.jsx'
import "./style.css"
import { Grid, Box, Typography } from '@mui/material';
import { BASE_URL_BBDD } from "../../App.jsx";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetSectionsQuery,
  useGetSessionsByIdSectionQuery,
} from "../../services/api.js";

export const SectionPage = () => {

  const selectedColor = useSelector((state)=>state.configuration.color)
  const navigate = useNavigate();


  const { id: idSection } = useParams();

  const { data, isLoading } = useGetSectionsQuery({}, {});
  const [imageSection, setImageSection] = useState("")

  !isLoading && console.log(data);
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

      <Grid container spacing={5} className="secciones" sx={{pt: 5, pl: 10, pb: 10, width: '100%', justifyContent: 'start'}}>
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



{/* <Box className="generalSesion" style={{backgroundColor: selectedColor}}>
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
