import { BASIC_URL } from "../../../App";
import TituloBannerMove from "../../TituloBannerMove";
import "./style.css";

import Carousel from "react-material-ui-carousel";

export const OpenCallNoticia = () => {
  return (
    <>
      <div className="noticiaCompleta">
        <TituloBannerMove
          titulo={
            <div className="noticiaTitleIndividual">
              Abertas as convocatorias para participar en INTERSECCIÓN - Abertas
              as convocatorias para participar en INTERSECCIÓN - Abertas as
              convocatorias para participar en INTERSECCIÓN -{" "}
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
                  src={`${BASIC_URL}/images/gente_proyeccion_2022.jpg`}
                  alt="INTERSECCIÓN 2022"
                ></img>{" "}
              </div>
              <div>
                {" "}
                <img
                  className="imagenNoticia"
                  src={`${BASIC_URL}/images/gente_coctel_2022.jpg`}
                  alt="INTERSECCIÓN 2022"
                ></img>
              </div>
              <div>
                {" "}
                <img
                  className="imagenNoticia"
                  src={`${BASIC_URL}/images/lab_2022.jpg`}
                  alt="INTERSECCIÓN 2022"
                ></img>
              </div>
              <div>
                {" "}
                <img
                  className="imagenNoticia"
                  src={`${BASIC_URL}/images/1to1_2022.jpg`}
                  alt="INTERSECCIÓN 2022"
                ></img>
              </div>
              <div>
                {" "}
                <img
                  className="imagenNoticia"
                  src={`${BASIC_URL}/images/gente_coctel_2_2022.jpg`}
                  alt="INTERSECCIÓN 2022"
                ></img>
              </div>
              <div>
                {" "}
                <img
                  className="imagenNoticia"
                  src={`${BASIC_URL}/images/lab_2_2022.jpg`}
                  alt="INTERSECCIÓN 2022"
                ></img>
              </div>
              <div>
                {" "}
                <img
                  className="imagenNoticia"
                  src={`${BASIC_URL}/images/1to1_2_2022.jpg`}
                  alt="INTERSECCIÓN 2022"
                ></img>
              </div>
            </Carousel>

            <p className="descripcionImagenNoticia">INTERSECCIÓN 2022 </p>
            <hr
              style={{
                marginTop: "2px",

                border: "0.5px solid ligthgrey",
              }}
            ></hr>
          </div>

          <div className="textoNoticia">
            <p>
              INTERSECCIÓN - Festival de Arte Audiovisual Contemporánea anuncia
              as datas da súa VI edición, que se celebrará na cidade da Coruña
              entre o 17 e o 22 de outubro. Cada ano este festival supón unha
              ocasión única para que o público poida gozar de estreas exclusivas
              de películas que habitualmente non chegan a salas nin plataformas.
              <br></br>
              <br></br>
            </p>
            <p>
              A programación do festival céntrase en obras creadas na mestura do
              cinema e outras disciplinas, como as artes visuais ou a música,
              sendo un festival singular, tanto en España como en Europa,
              converténdose nun referente internacional do cinema de vangarda e
              da arte audiovisual.
              <br></br>
              <br></br>
            </p>
            <p>
              O prazo de recepción de obras para as seccións competitivas está
              aberto ata o vindeiro 31 de maio. Este ano, ademais das seccións
              INTERNACIONAL, GALICIA e ESCOLAS, súmase a sección ESPAÑA, que
              englobará unha selección de obras de todo o país.
              <br></br>
              <br></br>
            </p>
            <p>
              Desde os seus inicios, un dos intereses principais de INTERSECCIÓN
              é o apoio ao talento emerxente. Isto reflíctese, entre outras
              iniciativas, na sección competitiva GALICIA, nas que se inclúe
              tanto a autoras consagradas como novos talentos, así como en
              ESCOLAS, unha sección adicada a estudantes de formación superior.
              Doutra banda, o festival busca servir de ponte para que autoras e
              público atopen na Coruña un lugar de conexión e confluencia no que
              coñecer o panorama creativo internacional e onde contaxiarse de
              discursos e estéticas diferentes.
              <br></br>
              <br></br>
            </p>
            <p>
              As bases para presentar obras ás seccións competitivas están
              dispoñibles no seguinte enlace:
              <br></br>
              <br></br>
            </p>
            <a
              className="basesOpenCallNoticia"
              href={`${BASIC_URL}/open-call`}
            >
              OPEN CALL
            </a>
            <p>
              <br></br>
              <br></br>
              <strong>
                INTERSECCIÓN LAB acollerá 20 proxectos e contará con máis de
                10.000€ en premios e bolsas
              </strong>
              <br></br>
              <br></br>
            </p>
            <p>
              INTERSECCIÓN LAB é un espazo de impulso á creación de proxectos
              audiovisuais co que se pretende contribuír á construción dun
              sector cinematográfico de calidade. Nel, as autoras poderán
              traballar e facer crecer as súas obras xunto a profesionais de
              prestixio internacional. Na rede de contactos que poderán facer
              figuran artistas, produtoras ou representantes de festivais e
              outros eventos como a Bienal de Venecia, o Festival de Cannes ou a
              Berlinale.
              <br></br>
              <br></br>
            </p>
            <p>
              INTERSECCIÓN LAB está financiado polo ICAA, a través dos fondos
              Next Generation EU como parte do Plan de Recuperación,
              Transformación e Resiliencia e a AC/E Acción Cultural Española.
              Grazas ao seu apoio, INTERSECCIÓN LAB convértese nun dos
              laboratorios españois que acolle a un maior número de proxectos,
              permitindo a participación dunha vintena de artistas que optarán a
              máis de 10.000€ en bolsas e premios.
              <br></br>
              <br></br>
            </p>
            <p>
              Nunha clara aposta por estimular a creación, INTERSECCIÓN LAB
              inclúe tres bolsas de residencia que permitirá a tres cineastas de
              toda España desprazarse á Coruña durante un mes para traballar de
              maneira intensiva nos seus proxectos. Ademais de seguimento e
              asesoramento profesional, dispoñerán de acceso a instalacións
              proporcionadas polo festival. As tres residentes contarán con
              todos os gastos incluídos e unha dotación económica.
              <br></br>
              <br></br>
            </p>
            <p>
              INTERSECCIÓN LAB constitúese tamén como un espazo novo que mira ao
              sector desde a perspectiva dos coidados, buscando novas formas de
              facer e pensar nas que non prime a competitividade. Por iso terá
              lugar un ano máis "When They Say Non", unha actividade que poñerá
              sobre a mesa as dificultades e medos que xorden á hora de
              presentar os proxectos a convocatorias. Nela, convidarase, ademais
              de a todas as participantes no laboratorio, a aquelas persoas que
              se postularon pero que finalmente non foron seleccionadas.
              <br></br>
              <br></br>
            </p>
            <p>
              A convocatoria estará aberta ata o 29 de xuño e as bases están
              dispoñibles no seguinte enlace:
              <br></br>
              <br></br>
            </p>
            <a
              className="basesOpenCallNoticia"
              href={`${BASIC_URL}/open-call-lab`}
            >
              OPEN CALL LAB
            </a>
            <p>
              <br></br>
              <br></br>
              <strong>
                INTERSECCIÓN - VI FESTIVAL DE ARTE AUDIOVISUAL CONTEMPORÁNEO
              </strong>
              <br></br>
              <br></br>
            </p>
            <p>
              Tras cinco exitosas edicións, INTERSECCIÓN consolidouse como un
              punto de encontro para autoras nacionais e internacionais. Na súa
              programación atopamos obras seleccionadas e laureadas en
              festivais, museos e eventos tan relevantes como Cannes, Berlinale,
              Róterdan, Nova York, a Bienal de Venecia, o MoMA, a Tate ou o
              Museo Reina Sofía. Unha proposta que converte Coruña nun punto de
              encontro entre artistas e profesionais internacionais co público
              local.
              <br></br>
              <br></br>
            </p>
            <p>
              INTERSECCIÓN - Festival de Arte Audiovisual Contemporánea está
              financiado, entre outros, polo ICAA - Instituto da Cinematografía
              e das Artes Audiovisuais; a Deputación da Coruña; Acción Cultural
              Española (AC/E) nas súas modalidades PICE - Visitantes e PICE
              Residencias; a Dirección Xeral de Industrias Culturais do
              Ministerio de Cultura; Cervexas 1906, Xunta de Galicia e o
              Concello da Coruña.
              <br></br>
              <br></br>
              <br></br>
            </p>
          </div>
          <img
            className="bannerOpenCall"
            src={`${BASIC_URL}/images/open_call_banner_lab_inter.png`}
            alt="Open Call INTERSECCIÓN 2023"
          ></img>
        </div>
      </div>
    </>
  );
};


