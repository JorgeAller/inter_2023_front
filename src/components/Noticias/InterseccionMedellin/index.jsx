import { BASIC_URL } from "../../../App";
import TituloBannerMove from "../../TituloBannerMove";
import "../InterseccionEchoes/style.css";

export const InterseccionMedellin = () => {
  return (
    <>
      <div className="noticiaCompleta">
        <TituloBannerMove
          titulo={
            <div className="noticiaTitleIndividual">
              INTERSECCIÓN ECHOES viaja a Medellín - INTERSECCIÓN ECHOES viaja a
              Medellín - INTERSECCIÓN ECHOES viaja a Medellín -{" "}
            </div>
          }
          speed={120}
        ></TituloBannerMove>

        <div className="noticiaIndividual">
          <div className="imagenDescripcionContainer">
            <div>
              <img
                className="imagenNoticia"
                src={`${BASIC_URL}/images/medellin_01.jpg`}
                alt="foto de Noticia"
              ></img>{" "}
            </div>

            <p className="descripcionImagenNoticia">
              INTERSECCIÓN ECHOES - A Coruña, España 05/06/2023{" "}
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
              A nosa xira por Sudamérica continúa, desta vez con parada en
              Colombia. O vindeiro 7 de xuño, ás 19:00h,{" "}
              <strong> Corpo, sexualidade e imaxe. O humano e o íntimo"</strong>{" "}
              proxectarase no{" "}
              <strong> Museo de Arte Moderno de Medellín</strong> grazas ao
              apoio da Embaixada de España en Colombia. Esta será unha nova
              oportunidade para proxectar obras de autoras españolas fóra das
              nosas fronteiras, o cal é posible grazas á colaboración da Axencia
              Española de Cooperación Internacional para o Desenvolvemento -
              AECID.
              <br></br>
              <br></br>
            </p>

            <p>
              Tras o seu paso por Uruguai e Arxentina, as obras de{" "}
              <strong>
                {" "}
                Laida Lertxundi, Carla Andrade, María Cañas, Maider Fernández
                Iriarte, Xisela Franco e Helena Vinent
              </strong>{" "}
              poderán ser disfrutadas polo público colombiano a través do fío
              condutor do corpo como lugar traumático, pero tamén como epicentro
              da creación artística e da mirada. O corpo en relación co mundo,
              en relación con outros corpos. Unha curadoría a cargo de Lara
              Castro, Noa Castro e Gonzalo E. Veloso.
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

