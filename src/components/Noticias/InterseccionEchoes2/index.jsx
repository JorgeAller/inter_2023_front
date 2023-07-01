import { BASIC_URL } from "../../../App";
import TituloBannerMove from "../../TituloBannerMove";
import "../InterseccionEchoes/style.css";

export const InterseccionEchoes2 = () => {
  return (
    <>
      <div className="noticiaCompleta">
        <TituloBannerMove
          titulo={
            <div className="noticiaTitleIndividual">
              INTERSECCIÓN ECHOES viaxa a Costa Rica - INTERSECCIÓN ECHOES viaxa
              a Costa Rica - INTERSECCIÓN ECHOES viaxa a Costa Rica -{" "}
            </div>
          }
          speed={120}
        ></TituloBannerMove>

        <div className="noticiaIndividual">
          <div className="imagenDescripcionContainer">
            <div>
              <img
                className="imagenNoticia"
                src={`${BASIC_URL}/images/costa_rica.webp`}
                alt="foto de Noticia"
              ></img>{" "}
            </div>

            <p className="descripcionImagenNoticia">
              INTERSECCIÓN ECHOES - A Coruña, España 13/06/2023{" "}
            </p>
            <hr
              style={{
                marginTop: "2px",

                border: "0.5px solid ligthgrey",
              }}
            ></hr>
          </div>
          <div className="textoNoticia">
            <p>
              INTERSECCIÓN ECHOES está a levarnos a coñecer lugares e persoas
              marabillosas. Despois de pasar por Uruguai e Arxentina, a semana
              pasada viaxamos a Medellín. Gonzalo E. Veloso, director do
              festival INTERSECCIÓN, puido conversar alí cun público cautivado
              polas obras de Laida Lertxundi, Carla Andrade, María Cañas, Maider
              Fernández Iriarte, Xisela Franco e Helena Vinent.
              <br></br>
              <br></br>
            </p>
            <p>
              INTERSECCIÓN ECHOES continúa grazas á colaboración da AECID e xa
              estamos a preparar a nosa seguinte cita no Centro Cultural de
              España en Costa Rica como parte da programación da Bienal Sur.
              <br></br>
              <br></br>
            </p>
            <p>
              Do 21 de xuño ao 5 de setembro poderanse disfrutar en formato
              expositivo as obras de Carla Andrade, Laida Lertxundi, Maider
              Fernández Iriarte, María Cañas, Oihana Cordero, Virginia García
              del Pino, Xisela Franco e Xoán Anleo en "Corpo, sexualidade e
              imaxe. O humano e o íntimo".
              <br></br>
              <br></br>
            </p>
            <p>
              Ser corpo (humano) implica unha responsabilidade e miles de
              posibilidades; nel proxectamos as imaxes culturais e sociais que
              nos axudan a darlle forma, a condicionalo para contelo. Pero ser
              corpo tamén implica rebelarse contra estas formas, pensar o desexo
              e a identidade mediante a manipulación, a exploración, o
              cuestionamento do seu propio comportamento en relación ao que se
              nos ensina que somos, para amplialo exponencialmente,
              enriquecéndoo até deformalo, até transcendelo e comprender que o
              noso corpo está tamén noutros, conectado a unha inmensa rede. A
              intimidade vólvese entón un escenario común, no que representarnos
              e ensaiarnos e, sobre todo, atoparnos.
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

