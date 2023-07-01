
import TituloBannerMove from "../../components/TituloBannerMove";
import { BASIC_URL } from "../../App";
import { useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SeccionesPage = () => {

    const selectedColor = useSelector((state)=>state.configuration.color)
    const navigate = useNavigate()
  
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

      <section className="secciones">
        <Box
          className="seccion"
          
        >
          <Box 
            className="tituloNoticia" 
            onClick={() => {
              navigate("/sesiones");
            }}  
          >
            <img
              src={`${BASIC_URL}/images/XISELA.png`}
              alt="foto de Noticia"
            ></img>
            <Box className="titulo" sx={{'&:hover': {color: selectedColor}}}>INTERNACIONAL </Box>
          </Box>

          <Box className="generalSesion" style={{backgroundColor: selectedColor}}>
            <a className="tituloSesion" href={`${BASIC_URL}/sesiones`}>TÍTULO DE LA SESIÓN</a>

            <Box className="informaciónSesion">
              <p className="fechaSesion">MARTES 10</p>
              <p className="horaSesion">20:30 - 22:30</p>
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
              <p className="autorObra">Perico de los palotes, carmen de mairena y gonzalo veloso gente gente gente gente</p>
              <p className="añoObra">2020</p>
              <p className="duracionObra">30`</p>
            </Box>
            <Box className="obraSesión">
              {/* AQUI HABRA UN MAP DEL ARRAY DE OBRAS DE SESION */}
              <p className="tituloObra">Titulo de una obra larguisima pero larguisima larguisima, incluso larguerrima</p>
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
          className="noticia"
          
        >
          <Box 
            className="tituloNoticia"
            onClick={() => {
              navigate("/sesiones");
            }}
          >

            <img
              src={`${BASIC_URL}/images/LAIDA.png`}
              alt="foto de Noticia"
            ></img>
            <Box className="titulo" sx={{'&:hover': {color: selectedColor}}}>GALICIA</Box>
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


        </Box>

        <Box
          className="noticia"
          onClick={() => {
            navigate("/noticia/interseccion-echoes-viaja-a-costa-rica");
          }}
        >
          <Box className="tituloNoticia">
            <img
              src={`${BASIC_URL}/images/CARLA.png`}
              alt="foto de Noticia"
            ></img>
            <Box className="titulo" sx={{'&:hover': {color: selectedColor}}}>ESCOLAS</Box>
          </Box>

          <Box className="generalSesion" style={{backgroundColor: selectedColor}}>
            <Box className="tituloSesion" >TÍTULO DE LA SESIÓN</Box>

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
          className="noticia"
          onClick={() => {
            navigate("/noticia/interseccion-echoes-viaja-a-costa-rica");
          }}
        >
          <Box className="tituloNoticia">
            <img
              src={`${BASIC_URL}/images/XISELA.png`}
              alt="foto de Noticia"
            ></img>
            <Box className="titulo" sx={{'&:hover': {color: selectedColor}}}>INTERNACIONAL 2</Box>
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
  );
};
