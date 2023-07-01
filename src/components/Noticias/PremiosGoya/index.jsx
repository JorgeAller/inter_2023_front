import { BASIC_URL } from "../../../App";
import TituloBannerMove from "../../TituloBannerMove";
import "../InterseccionEchoes/style.css";

export const PremiosGoya = () => {
  return (
    <>
      <div className="noticiaCompleta">
        <TituloBannerMove
          titulo={
            <div className="noticiaTitleIndividual">
              INTERSECCIÓN, colaborador nos Premios Goya - INTERSECCIÓN,
              colaborador nos Premios Goya - INTERSECCIÓN, colaborador nos
              Premios Goya -{" "}
            </div>
          }
          speed={120}
        ></TituloBannerMove>

        <div className="noticiaIndividual">
          <div className="imagenDescripcionContainer">
            <div>
              <img
                className="imagenNoticia"
                src={`${BASIC_URL}/images/goya.jpg`}
                alt="foto de Noticia"
              ></img>{" "}
            </div>

            <p className="descripcionImagenNoticia">
              INTERSECCIÓN, colaborador nos Premios Goya - A Coruña, España
              05/06/2023{" "}
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
              A Academia das Artes e das Ciencias Cinematográficas de España
              inclúe a INTERSECCIÓN na lista dos festivais españois
              cualificadores para os Premios Goya de curtametraxes de ficción,
              documental e animación. Deste xeito, a obra gañadora do Premio do
              Xurado á Mellor Curtametraxe Española será automaticamente
              candidata aos Premios Goya 2024.
              <br></br>
              <br></br>
            </p>
            <p>
              Para nós, isto supón unha nova oportunidade para continuar
              apoiando o talento das creadoras españolas e contribuír a unha
              selección nos Premios Goya máis ampla e diversa.
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};


