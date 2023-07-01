import { EchoesPage } from "./EchoesPage/EchoesPage";
import { ErrorPage } from "./ErrorPage/ErrorPage";
import { LandingPage } from "./LandingPage";
import { NoticiasPage } from "./NoticiasPage";
import { SeccionesPage } from "./SeccionesPage/SeccionesPage";
import { SesionesPage } from "./SesionesPage/SesionesPage";
import { ProgramacionPage } from "./ProgramacionPage/ProgramacionPage";

export const pages = {
  landing: <LandingPage />,
  errorPage: <ErrorPage />,
  noticiasPage: <NoticiasPage />,
  programacionPage: <ProgramacionPage/>,
  echoesPage: <EchoesPage/>
  seccionesPage: <SeccionesPage />,
  sesionesPage: <SesionesPage/>,
};
