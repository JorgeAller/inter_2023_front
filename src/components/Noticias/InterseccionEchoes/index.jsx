import { BASIC_URL } from "../../../App";
import TituloBannerMove from "../../TituloBannerMove";
import "./style.css";

import Carousel from "react-material-ui-carousel";

export const InterseccionEchoes = () => {
  return (
    <>
      <div className="noticiaCompleta">
        <TituloBannerMove
          titulo={
            <div className="noticiaTitleIndividual">
              INTERSECCIÓN ECHOES viaxa a Uruguay - INTERSECCIÓN ECHOES viaxa a
              Uruguay - INTERSECCIÓN ECHOES viaxa a Uruguay -{" "}
            </div>
          }
          speed={120}
        ></TituloBannerMove>

        <div className="noticiaIndividual">
          <div className="imagenDescripcionContainer">
            {/* */}
            <Carousel
              interval={5000}
              duration={650}
              navButtonsAlwaysVisible={true}
              navButtonsProps={{
                style: {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
              indicatorContainerProps={{
                style: {
                  textAlign: "center",
                },
              }}
              indicatorIconButtonProps={{
                style: {
                  color: "black",
                  textAlign: "start",
                },
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  color: "var(--color1)",
                  backgroundColor: "var(--color1)",
                },
              }}
            >
              <div>
                <img
                  className="imagenNoticia"
                  src={`${BASIC_URL}/images/echoes.png`}
                  alt="foto de Noticia"
                ></img>{" "}
              </div>
              <div>
                {" "}
                <img
                  className="imagenNoticia"
                  src={`${BASIC_URL}/images/CARLA.png`}
                  alt="CARLA ANDRADE - LISTEN TO ME"
                ></img>
              </div>
              <div>
                {" "}
                <img
                  className="imagenNoticia"
                  src={`${BASIC_URL}/images/MAIDER.png`}
                  alt="MAIDER FERNÁNDEZ IRIARTE - AMOR SIEMPRE"
                ></img>
              </div>
              <div>
                {" "}
                <img
                  className="imagenNoticia"
                  src={`${BASIC_URL}/images/MARIA.png`}
                  alt="MARÍA CAÑAS - PADRE NO NUESTRO"
                ></img>
              </div>
              <div>
                {" "}
                <img
                  className="imagenNoticia"
                  src={`${BASIC_URL}/images/XISELA.png`}
                  alt="XISELA FRANCO - DÍA 13 DE JULIO Y DÍA 12 DE AGOSTO"
                ></img>
              </div>
              <div>
                {" "}
                <img
                  className="imagenNoticia"
                  src={`${BASIC_URL}/images/LAIDA.png`}
                  alt="LAIDA LERTXUNDI - VIVIR PARA VIVIR"
                ></img>
              </div>
            </Carousel>

            <p className="descripcionImagenNoticia">
              INTERSECCIÓN ECHOES - A Coruña, España 29/03/2023{" "}
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
              "Corpo, sexualidade e imaxe. O humano e o íntimo", un proxecto
              comisariado por INTERSECCIÓN, visitará Montevideo o 6 e o 10 de
              abril, inaugurando así o programa INTERSECCIÓN ECHOES no cal o
              festival busca exportar o talento das nosas artistas polo mundo.
              <br></br>
              <br></br>
            </p>
            <p>
              "Corpo, sexualidade e imaxe. O humano e o íntimo", proxectarase na
              Cinemateca Uruguaya dentro da programación do Festival
              Cinematográfico Internacional de Uruguay grazas a colaboración co
              Centro Cultural de España en Montevideo. Unha proposta que recolle
              as obras dos artistas Laida Lertxundi, Carla Andrade, María Cañas,
              Maider Fernández Iriarte e Xisela Franco. Nela, abórdase o corpo
              como un lugar traumático, pero tamén como epicentro da creación
              artística e da mirada. O corpo en relación co mundo, en relación a
              outros corpos, atravesado continuamente por estigmas, medos,
              afectos e metamorfose, é o fio condutor que une todas as obras que
              compoñen esta proposta.
              <br></br>
              <br></br>
            </p>
            <p>
              En Uruguay inaugúrase INTERSECCIÓN ECHOES, un proxecto que xorde
              da colaboración entre INTERSECCIÓN e a Axencia Española de
              Cooperación Internacional para o Desenvolvemento – AECID,
              dependente do Ministerio de Asuntos Exteriores. Baixo esta marca,
              o equipo do festival levou a cabo o comisariado de dúas
              programacións que se mostrarán como exposicións audiovisuais ou
              sesións cinematográficas. Este proxecto engloba dezaseis obras de
              autoras españolas, as cales serán mostradas en embaixadas, en
              Centros Culturais de España no estranxeiro, así como en festivais,
              filmotecas ou museos por todo o mundo.
              <br></br>
              <br></br>
            </p>
            <p>
              INTERSECCIÓN ECHOES pretende continuar e expandir o traballo de
              difusión que INTERSECCIÓN realiza como festival, apoiándose no seu
              equipo, e levando a obra de autoras españolas por outros países.
              Este interese comezou xa no 2020, cando o festival colaborou co
              Instituto Cervantes para a itinerancia dun ciclo audiovisual por
              mais de 50 países. En definitiva, este proxecto busca así impulsar
              a presenza das creadoras españolas fora das nosas fronteiras,
              xerando oportunidades de relacións internacionais no ámbito da
              creación contemporánea.
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

