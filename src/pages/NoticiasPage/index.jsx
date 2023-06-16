/* import { useState } from "react";
import { useNavigate } from "react-router-dom";*/
import TituloBannerMove from "../../components/TituloBannerMove"; 

export const NoticiasPage = () => {
  return (
    <section className="contenido">
      <div className={`contenedorTitulo `}>
        <TituloBannerMove
          titulo={
            <div
            className="noticiaTitle"
            style={{
              color: "black",
              cursor: "default",
              WebkitTextStroke: "0px",
            }}
            >
              TEST &nbsp; TEST &nbsp; TEST &nbsp; TEST &nbsp; TEST
              &nbsp; TEST &nbsp; TEST &nbsp; TEST &nbsp; TEST &nbsp;
              TEST &nbsp; TEST &nbsp; TEST &nbsp; TEST &nbsp; TEST
              &nbsp; TEST &nbsp; TEST &nbsp;
            </div>
          }
          speed={60}
          ></TituloBannerMove>
      </div>
    </section>
  )
};

/* const navigate = useNavigate();
  const desc =
    '"Corpo, sexualidade e imaxe. O humano e o íntimo", un proxecto comisariado por INTERSECCIÓN, visitará Montevideo o 6 e o 10 de abril, inaugurando así o programa INTERSECCIÓN ECHOES no cal o festival busca exportar o talento das nosas artistas polo mundo.';

  const descOpenCall =
    "INTERSECCIÓN - Festival de Arte Audiovisual Contemporánea anuncia as datas da súa VI edición, que se celebrará na cidade da Coruña entre o 17 e o 22 de outubro. Cada ano este festival supón unha ocasión única para que o público poida gozar de estreas exclusivas de películas que habitualmente non chegan a salas nin plataformas.";
  const descMiradas =
    "En INTERSECCIÓN retomamos un ano máis o noso compromiso coa cultura como ferramenta social para reivindicar o dereito universal do acceso á cultura. A consumila, creala e vivila.";

  const descArxentina =
    '"Corpo, sexualidade e imaxe. O humano e o íntimo" proxéctase o 18 de maio ás 18.30h en Rosario (Arxentina). É a segunda parada do noso proxecto INTERSECCIÓN ECHOES, que despois do seu paso por Uruguai, continúa camiño para impulsar a presenza das creadoras españolas fora das nosas fronteiras, xerando oportunidades de relacións internacionais no ámbito da creación contemporánea.';

  const descMedellin =
    'A nosa xira por Sudamérica continúa, desta vez con parada en Colombia. O vindeiro 7 de xuño, ás 19:00h, "Corpo, sexualidade e imaxe. O humano e o íntimo" proxectarase no Museo de Arte Moderno de Medellín grazas ao apoio da Embaixada de España en Colombia. Esta será unha nova oportunidade para proxectar obras de autoras españolas fóra das nosas fronteiras, o cal é posible grazas á colaboración da Axencia Española de Cooperación Internacional para o Desenvolvemento - AECID.';

  const descGoya =
    "A Academia das Artes e das Ciencias Cinematográficas de España inclúe a INTERSECCIÓN na lista dos festivais españois cualificadores para os Premios Goya de curtametraxes de ficción, documental e animación. Deste xeito, a obra gañadora do Premio do Xurado á Mellor Curtametraxe Española será automaticamente candidata aos Premios Goya 2024.";

  const descCostaRica =
    "INTERSECCIÓN ECHOES está a levarnos a coñecer lugares e persoas marabillosas. Despois de pasar por Uruguai e Arxentina, a semana pasada viaxamos a Medellín. Gonzalo E. Veloso, director do festival INTERSECCIÓN, puido conversar alí cun público cautivado polas obras de Laida Lertxundi, Carla Andrade, María Cañas, Maider Fernández Iriarte, Xisela Franco e Helena Vinent.";

  const descMiradas2 =
    'Cada ano, "Miradas Diversas a Coruña" gaña máis importancia en INTERSECCIÓN. Porque Coruña é diversa e así debemos ser as súas creadoras';

  const truncateDescription = (description, maxLines) => {
    const words = description.split(" ");
    let lines = [];
    let line = "";
    for (let i = 0; i < words.length; i++) {
      if (line.length + words[i].length <= 135) {
        line += ` ${words[i]}`;
      } else {
        lines.push(line);
        line = words[i];
      }
    }
    lines.push(line);
    return (
      lines.slice(0, maxLines).join(" ") +
      (lines.length > maxLines ? "..." : "")
    );
  };

  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);
  const [isExpanded6, setIsExpanded6] = useState(false);
  const [isExpanded7, setIsExpanded7] = useState(false);
  const [isExpanded8, setIsExpanded8] = useState(false);
  // const [isExpanded9, setIsExpanded9] = useState(false);
  // const [isExpanded10, setIsExpanded10] = useState(false);

  return (
    <section className="contenido">
      <div className="bannerDiv">
        <TituloBannerMove
          titulo={
            <div
              className="noticiaTitle"
              style={{
                color: "black",

                WebkitTextStroke: "0px",
              }}
            >
              NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp;
              NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp;
              NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp;
              NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp;
            </div>
          }
          speed={60}
        ></TituloBannerMove>
      </div>

      <section className="noticias">
        <div
          className="noticia"
          onClick={() => {
            navigate("/noticia/interseccion-echoes-viaja-a-costa-rica");
          }}
        >
          <div className="tituloNoticia">
            <img
              src={`${process.env.PUBLIC_URL}/images/costa_rica_vacia.jpg`}
              alt="foto de Noticia"
            ></img>
            <div className="titulo">
              Intersección echoes <br></br> viaxa a <br></br> Costa Rica
            </div>
          </div>

          <div
            className={`descripcionPrevia ${isExpanded7 ? "expanded" : ""}`}
            onMouseEnter={() => setIsExpanded7(!isExpanded7)}
            onMouseOut={() => setIsExpanded7(!isExpanded7)}
          >
            {isExpanded7
              ? descCostaRica
              : truncateDescription(descCostaRica, 1)}
          </div>
        </div>

        <div
          className="noticia"
          onClick={() => {
            navigate("/noticia/miradas-diversas-a-coruna");
          }}
        >
          <div className="tituloNoticia">
            <img
              src={`${process.env.PUBLIC_URL}/images/miradas_diversas_2.jpg`}
              alt="foto de Noticia"
            ></img>
            <div className="titulo">
              Miradas <br></br> Diversas <br></br> a coruña
            </div>
          </div>

          <div
            className={`descripcionPrevia ${isExpanded8 ? "expanded" : ""}`}
            onMouseEnter={() => setIsExpanded8(!isExpanded8)}
            onMouseOut={() => setIsExpanded8(!isExpanded8)}
          >
            {isExpanded8 ? descMiradas2 : truncateDescription(descMiradas2, 1)}
          </div>
        </div>

        <div
          className="noticia"
          onClick={() => {
            navigate("/noticia/interseccion-echoes-viaja-a-medellin");
          }}
        >
          <div className="tituloNoticia">
            <img
              src={`${process.env.PUBLIC_URL}/images/LAIDA.png`}
              alt="foto de Noticia"
            ></img>
            <div className="titulo">
              Intersección echoes <br></br> viaxa a Medellin
            </div>
          </div>

          <div
            className={`descripcionPrevia ${isExpanded7 ? "expanded" : ""}`}
            onMouseEnter={() => setIsExpanded5(!isExpanded5)}
            onMouseOut={() => setIsExpanded5(!isExpanded5)}
          >
            {isExpanded5 ? descMedellin : truncateDescription(descMedellin, 1)}
          </div>
        </div>

        <div
          className="noticia"
          onClick={() => {
            navigate("/noticia/interseccion-colaborador-en-los-premios-goya");
          }}
        >
          <div className="tituloNoticia">
            <img
              src={`${process.env.PUBLIC_URL}/images/goya.jpg`}
              alt="foto de Noticia"
            ></img>
            <div className="titulito">
              INTERSECCIÓN, colaborador <br></br>nos Premios Goya
            </div>
          </div>

          <div
            className={`descripcionPrevia ${isExpanded6 ? "expanded" : ""}`}
            onMouseEnter={() => setIsExpanded6(!isExpanded6)}
            onMouseOut={() => setIsExpanded6(!isExpanded6)}
          >
            {isExpanded6 ? descGoya : truncateDescription(descGoya, 1)}
          </div>
        </div>

        <div
          className="noticia"
          onClick={() => {
            navigate("/noticia/interseccion-echoes-viaja-a-argentina");
          }}
        >
          <div className="tituloNoticia">
            <img
              src={`${process.env.PUBLIC_URL}/images/INTERSECCIONECHOES_Argentina(3).png`}
              alt="foto de Noticia"
            ></img>
            <div className="titulo">
              Intersección echoes <br></br> viaxa a arxentina
            </div>
          </div>

          <div
            className={`descripcionPrevia ${isExpanded4 ? "expanded" : ""}`}
            onMouseEnter={() => setIsExpanded4(!isExpanded4)}
            onMouseOut={() => setIsExpanded4(!isExpanded4)}
          >
            {isExpanded4
              ? descArxentina
              : truncateDescription(descArxentina, 1)}
          </div>
        </div>

        <div
          className="noticia"
          onClick={() => {
            navigate("/noticia/comienza-miradas-diversas-a-coruna");
          }}
        >
          <div className="tituloNoticia">
            <img
              src={`${process.env.PUBLIC_URL}/images/Miradas_Diversas_A_Coruna.png`}
              alt="foto de Noticia"
            ></img>
            <div className="titulo">
              Comeza Miradas Diversas <br></br>A Coruña
            </div>
          </div>

          <div
            className={`descripcionPrevia ${isExpanded3 ? "expanded" : ""}`}
            onMouseEnter={() => setIsExpanded3(!isExpanded3)}
            onMouseOut={() => setIsExpanded3(!isExpanded3)}
          >
            {isExpanded3 ? descMiradas : truncateDescription(descMiradas, 1)}
          </div>
        </div>

        <div
          className="noticia"
          onClick={() => {
            navigate(
              "/noticia/abiertas-las-convocatorias-para-participar-en-interseccion"
            );
          }}
        >
          <div className="tituloNoticia">
            <img
              src={`${process.env.PUBLIC_URL}/images/OPEN_CALL_2.png`}
              alt="foto de Noticia"
            ></img>
            <div className="titulito">
              Abertas as convocatorias para participar en INTERSECCIÓN
            </div>
          </div>

          <div
            className={`descripcionPrevia ${isExpanded2 ? "expanded" : ""}`}
            onMouseEnter={() => setIsExpanded2(!isExpanded2)}
            onMouseOut={() => setIsExpanded2(!isExpanded2)}
          >
            {isExpanded2 ? descOpenCall : truncateDescription(descOpenCall, 1)}
          </div>
        </div>

        <div
          className="noticia"
          onClick={(event) => {
            navigate("/noticia/interseccion-echoes-viaja-a-uruguay");
          }}
        >
          <div className="tituloNoticia">
            <img
              src={`${process.env.PUBLIC_URL}/images/echoes.png`}
              alt="foto de Noticia"
            ></img>
            <div className="titulo">
              INTERSECCIÓN ECHOES <br></br>viaxa a Uruguay
            </div>
          </div>

          <div
            className={`descripcionPrevia ${isExpanded1 ? "expanded" : ""}`}
            onMouseEnter={() => setIsExpanded1(!isExpanded1)}
            onMouseOut={() => setIsExpanded1(!isExpanded1)}
          >
            {isExpanded1 ? desc : truncateDescription(desc, 1)}
          </div>
        </div>
      </section>
    </section>
  ); */
