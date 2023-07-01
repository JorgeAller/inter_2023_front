
import { BASIC_URL } from "../../../App";
import TituloBannerMove from "../../TituloBannerMove";
import "../InterseccionEchoes/style.css";

import Carousel from "react-material-ui-carousel";

export const MiradasDiversas2 = () => {
  return (
    <>
      <div className="noticiaCompleta">
        <TituloBannerMove
          titulo={
            <div className="noticiaTitleIndividual">
              Miradas Diversas A Coruña - Miradas Diversas A Coruña - Miradas
              Diversas A Coruña -{" "}
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
                  src={`${BASIC_URL}/images/miradas_diversas_1.jpg`}
                  alt="Miradas Diversas a Coruña"
                ></img>{" "}
              </div>
              <div>
                {" "}
                <img
                  className="imagenNoticia"
                  src={`${BASIC_URL}/images/miradas_diversas_2.jpg`}
                  alt="Miradas Diversas a Coruña"
                ></img>
              </div>
              <div>
                {" "}
                <img
                  className="imagenNoticia"
                  src={`${BASIC_URL}/images/miradas_diversas_3.jpg`}
                  alt="Miradas Diversas a Coruña"
                ></img>
              </div>
            </Carousel>

            <p className="descripcionImagenNoticia">
              Miradas Diversas - A Coruña, España 13/06/2023{" "}
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
              Cada ano, "Miradas Diversas a Coruña" gaña máis importancia en
              INTERSECCIÓN. Porque Coruña é diversa e así debemos ser as súas
              creadoras.
              <br></br>
              <br></br>
            </p>
            <p>
              Despois dun mes experimentando cos procesos de rodaxe dun
              curtametraxe, esta semana puideron visionar parte dos resultados
              desta obra, cuxo leitmotiv será a aproximación ao espazo urbano da
              nosa cidade: a forma na que as súas cidadás o habitan, comparten,
              viven e conviven.
              <br></br>
              <br></br>
            </p>

            <p>
              Esta actividade é posible grazas ao apoio da Fundación Emalcsa e
              ao incansable traballo diario das traballadoras e usuarias de APEM
              (Asociación Pro Enfermos Mentais) e ASPRONAGA (Asociación Pro
              Persoas con Discapacidade Intelectual de Galicia), que volverán
              acompañarnos na presentación oficial do curta-metraxe durante a VI
              edición de INTERSECCIÓN en outubro.
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};


