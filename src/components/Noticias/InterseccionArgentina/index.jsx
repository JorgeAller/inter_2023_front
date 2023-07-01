import { BASIC_URL } from "../../../App";
import TituloBannerMove from "../../TituloBannerMove";
import "./style.css";

export const InterseccionArgentina = () => {
  return (
    <>
      <div className="noticiaCompleta">
        <TituloBannerMove
          titulo={
            <div className="noticiaTitleIndividual">
              INTERSECCIÓN ECHOES viaxa a Arxentina - INTERSECCIÓN ECHOES viaxa
              a Arxentina - INTERSECCIÓN ECHOES viaxa a Arxentina -{" "}
            </div>
          }
          speed={120}
        ></TituloBannerMove>

        <div className="noticiaIndividual">
          <div className="imagenDescripcionContainer">
            {/* */}

            <div>
              <img
                className="imagenNoticia"
                src={`${BASIC_URL}/images/INTERSECCIONECHOES_Argentina(4).png`}
                alt="foto de Noticia"
              ></img>{" "}
            </div>

            <p className="descripcionImagenNoticia">
              INTERSECCIÓN ECHOES - A Coruña, España 16/05/2023{" "}
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
              "Corpo, sexualidade e imaxe. O humano e o íntimo" proxéctase o 18
              de maio ás 18.30h en Rosario (Arxentina). É a segunda parada do
              noso proxecto INTERSECCIÓN ECHOES, que despois do seu paso por
              Uruguai, continúa camiño para impulsar a presenza das creadoras
              españolas fora das nosas fronteiras, xerando oportunidades de
              relacións internacionais no ámbito da creación contemporánea.
              <br></br>
              <br></br>
            </p>
            <p>
              Así, grazas á colaboración entre INTERSECCIÓN e a Axencia Española
              de Cooperación Internacional para o Desenvolvemento - AECID, o
              Centro Cultural Parque de España de Rosario proxectará esta semana
              obras das artistas españolas Laida Lertxundi, Carla Andrade, María
              Canas, Maider Fernández Iriarte, Xisela Franco e Helena Vinent.
              <br></br>
              <br></br>
            </p>

            <p>
              En "Corpo, sexualidade e imaxe. O humano e o íntimo" abórdase o
              corpo como lugar traumático, pero tamén como epicentro da creación
              artística e da mirada. O corpo en relación co mundo, en relación a
              outros corpos, atravesado continuamente por estigmas, medos,
              afectos e metamorfoses, é o fío condutor que une todas as obras
              que compoñen esta proposta.
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

