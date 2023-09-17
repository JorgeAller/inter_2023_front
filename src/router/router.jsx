import { createBrowserRouter } from "react-router-dom";
import { pages } from "../pages";
import Layout from "../layouts/Layout.jsx";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { NoticiaIndividualPage } from "../pages/NoticiaIndividualPage";
import { InterseccionEchoes2 } from "../components/Noticias/InterseccionEchoes2";
import { MiradasDiversas2 } from "../components/Noticias/MiradasDiversas2";
import { InterseccionMedellin } from "../components/Noticias/InterseccionMedellin";
import { PremiosGoya } from "../components/Noticias/PremiosGoya";
import { MiradasDiversas } from "../components/Noticias/MiradasDiversas";
import { OpenCallNoticia } from "../components/Noticias/OpenCallNoticia";
import { InterseccionArgentina } from "../components/Noticias/InterseccionArgentina";
import { InterseccionEchoes } from "../components/Noticias/InterseccionEchoes";


export const router = createBrowserRouter([
  // Rutas básicas
  { path: "/", element: pages.landing },
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "noticias", element: pages.noticiasPage },
      { path: "programa", element: pages.programaPage },
      { path: "section", element: pages.sectionPage },
      { path: "sesion", element: pages.sessionPage },
      { path: "echoes", element: pages.echoesPage },
      { path: "people", element: pages.peoplePage },
      { path: "/noticia/interseccion-echoes-viaja-a-costa-rica", element: <NoticiaIndividualPage noticia={<InterseccionEchoes2 />} /> },
      { path: "/noticia/miradas-diversas-a-coruna", element: <NoticiaIndividualPage noticia={<MiradasDiversas2 />} /> },
      { path: "/noticia/interseccion-echoes-viaja-a-medellin", element: <NoticiaIndividualPage noticia={<InterseccionMedellin />} /> },
      { path: "/noticia/interseccion-colaborador-en-los-premios-goya", element: <NoticiaIndividualPage noticia={<PremiosGoya />} /> },
      { path: "/noticia/interseccion-echoes-viaja-a-argentina", element: <NoticiaIndividualPage noticia={<InterseccionArgentina />} /> },
      { path: "/noticia/comienza-miradas-diversas-a-coruna", element: <NoticiaIndividualPage noticia={<MiradasDiversas />} /> },
      { path: "/noticia/interseccion-echoes-viaja-a-uruguay", element: <NoticiaIndividualPage noticia={<InterseccionEchoes />} /> },
      { path: "/noticia/abiertas-las-convocatorias-para-participar-en-interseccion", element: <NoticiaIndividualPage noticia={<OpenCallNoticia />} /> },

      {path: "/info/quienes-somos", element: pages.quenSomosPage},
      {path: "/info/sostenibilidad", element: pages.sostenibilidadPage}

      /*       { path: "noticias", element: pages.noticiasPage } */
    ],
  },
  
]);
