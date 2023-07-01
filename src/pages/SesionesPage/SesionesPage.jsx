import { useSelector } from 'react-redux';
import { BASIC_URL } from '../../App.jsx';
import TituloBannerMove from '../../components/TituloBannerMove/index.jsx'
import {style} from './style.js'
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export const SesionesPage = () => {

  const selectedColor = useSelector((state)=>state.configuration.color)
  const navigate = useNavigate();

  return (
    <>
    <section className="contenido">
        <Box className={`contenedorTitulo `}>
          <TituloBannerMove
            titulo={
              <Box
              className="noticiaTitle"
              style={{
                color: "black",
                cursor: "default",
                WebkitTextStroke: "0px",
              }}
              >
                INTERNACIONAL I &nbsp; INTERNACIONAL I &nbsp; INTERNACIONAL I &nbsp; INTERNACIONAL I &nbsp;
                INTERNACIONAL I &nbsp; INTERNACIONAL I &nbsp; INTERNACIONAL I &nbsp; INTERNACIONAL I &nbsp;
                INTERNACIONAL I &nbsp; INTERNACIONAL I &nbsp; INTERNACIONAL I &nbsp; INTERNACIONAL I &nbsp;
                INTERNACIONAL I &nbsp; INTERNACIONAL I &nbsp; INTERNACIONAL I &nbsp; INTERNACIONAL I &nbsp;
              </Box>
            }
            speed={60}
            />
        </Box>
      </section>

      <section className='secciones'>
        <Box
            className="seccion" //seria sesion
            
          >
            <Box 
              className="tituloNoticia" 
              
            >
              <img
                src={`${BASIC_URL}/images/XISELA.png`}
                alt="foto de Noticia"
              ></img>
              <Box className="titulo" sx={{'&:hover': {color: selectedColor}}}>INTERNACIONAL 1</Box>
            </Box>

            <Box className="generalSesion" sx={{backgroundColor: selectedColor}}>
              <a className="tituloSesion" href={`${BASIC_URL}/sesion`}>TÍTULO DE LA SESIÓN</a>

              <Box className="informaciónSesion">
                <p className="fechaSesion">MARTES 10</p>
                <p className="horaSesion">20:30</p>
                <p className="lugarSesion">FUNDACIÓN LUIS SEOANE</p>
              </Box>

              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>
              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>
              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>
              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>

            </Box>
            <Box className="generalSesion" style={{backgroundColor: selectedColor}}>
              <Box className="tituloSesion">TÍTULO DE LA SESIÓN</Box>

              <Box className="informaciónSesion">
                <p className="fechaSesion">MARTES 10</p>
                <p className="horaSesion">20:30</p>
                <p className="lugarSesion">FUNDACIÓN LUIS SEOANE</p>
              </Box>

              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>
            

            </Box>
            <Box className="generalSesion" style={{backgroundColor: selectedColor}}>
              <Box className="tituloSesion">TÍTULO DE LA SESIÓN</Box>

              <Box className="informaciónSesion">
                <p className="fechaSesion">MARTES 10</p>
                <p className="horaSesion">20:30</p>
                <p className="lugarSesion">FUNDACIÓN LUIS SEOANE</p>
              </Box>

              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>
              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>
              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>
              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>

            </Box>


        </Box>
        <Box
            className="seccion" //seria sesion
            
          >
            <Box 
              className="tituloNoticia" 
              
            >
              <img
                src={`${BASIC_URL}/images/XISELA.png`}
                alt="foto de Noticia"
              ></img>
              <Box className="titulo" sx={{'&:hover': {color: selectedColor}}}>INTERNACIONAL 2</Box>
            </Box>

            <Box className="generalSesion" sx={{backgroundColor: selectedColor}}>
              <a className="tituloSesion" href={`${BASIC_URL}/sesion`}>TÍTULO DE LA SESIÓN</a>

              <Box className="informaciónSesion">
                <p className="fechaSesion">MARTES 10</p>
                <p className="horaSesion">20:30</p>
                <Box 
                  className="lugarSesion" 
                  component={Link} 
                  to='https://goo.gl/maps/5CuoAfBLrhcx25Dr7' 
                  target='_blank' 
                  style={{textDecoration: 'none', fontWeight:'900', color:'white', display:'flex', flexDirection: 'row'}}
                >
                  <Typography>
                    FUNDACIÓN LUIS SEOANE
                  </Typography>
                  <FmdGoodIcon></FmdGoodIcon>

                </Box>
              </Box>

              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>
              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>
              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>

            </Box>
            <Box className="generalSesion" style={{backgroundColor: selectedColor}}>
              <Box className="tituloSesion">TÍTULO DE LA SESIÓN</Box>

              <Box className="informaciónSesion">
                <p className="fechaSesion">MARTES 10</p>
                <p className="horaSesion">20:30</p>
                <p className="lugarSesion">FUNDACIÓN LUIS SEOANE</p>
              </Box>

              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima larguisima larguisima larguisima larguisima larguisima</p>
                <p className="autorObra">Perico de los palotes y cuatro burros mas que no hiceron nada</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>
              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>
            

            </Box>
            <Box className="generalSesion" style={{backgroundColor: selectedColor}}>
              <Box className="tituloSesion">TÍTULO DE LA SESIÓN</Box>

              <Box className="informaciónSesion">
                <p className="fechaSesion">MARTES 10</p>
                <p className="horaSesion">20:30</p>
                <p className="lugarSesion">FUNDACIÓN LUIS SEOANE</p>
              </Box>

              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>
              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>
              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>
              <Box className="obraSesión">
                {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
                <p className="tituloObra">Titulo de una obra larguisima</p>
                <p className="autorObra">Perico de los palotes</p>
                <p className="añoObra">2020</p>
                <p className="duracionObra">30`</p>
              </Box>

            </Box>


        </Box>
      </section>
    
    
    </>
      
  )
}
