import { BASIC_URL } from "../../../App";
import TituloBannerMove from "../../TituloBannerMove";
import "../InterseccionEchoes/style.css";

export const MiradasDiversas = () => {
  return (
    <>
      <div className="noticiaCompleta">
        <TituloBannerMove
          titulo={
            <div className="noticiaTitleIndividual">
              Comeza Miradas Diversas A Coruña - Comeza Miradas Diversas A
              Coruña - Comeza Miradas Diversas A Coruña -{" "}
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
                src={`${BASIC_URL}/images/Miradas_Diversas_A_Coruna_ConTexto.jpg`}
                alt="foto de Noticia"
              ></img>{" "}
            </div>

            <p className="descripcionImagenNoticia">
              Miradas Diversas - A Coruña, España 16/05/2023{" "}
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
              En INTERSECCIÓN retomamos un ano máis o noso compromiso coa
              cultura como ferramenta social para reivindicar o dereito
              universal do acceso á cultura. A consumila, creala e vivila.
              <br></br>
              <br></br>
            </p>
            <p>
              Grazas ao apoio da Fundación Emalcsa volve "Miradas Diversas A
              Coruña", un proxecto de creación colectiva no que as usuarias de
              APEM (Asociación Pro Enfermos Mentais) e ASPRONAGA (Asociación Pro
              Persoas con Discapacidade Intelectual de Galicia) experimentarán
              cos procesos de rodaxe dunha curtametraxe cuxo leitmotiv será o
              achegamento ao espazo urbano da nosa cidade: a forma en que as
              súas cidadás habítana, comparten, viven e conviven.
              <br></br>
              <br></br>
            </p>

            <p>
              A elas uniranse artistas locais que guiarán o proceso en sesións
              semanais que se prolongarán durante todo o mes de maio. O
              resultado final expoñerase na Volátil - Espazo de intervencións
              artísticas, onde poderán compartir a súa creación xunto a amigas e
              familiares. Unha mostra que será aberta a todo o público e na que
              poderemos escoitar de primeira man como foi a experiencia das
              usuarias.
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

