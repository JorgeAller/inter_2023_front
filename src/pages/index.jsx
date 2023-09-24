import { EchoesPage } from "./EchoesPage/EchoesPage";
import { ErrorPage } from "./ErrorPage/ErrorPage";
import { LandingPage } from "./LandingPage";
import { NoticiasPage } from "./NoticiasPage";
import { ProgramaPage } from "./ProgramaPage/ProgramaPage";
import { SectionPage } from "./SectionPage/SectionPage";
import { SessionPage } from "./SessionPage/SessionPage";
import { ProgramacionPage } from "./ProgramacionPage/ProgramacionPage";
import { QuenSomosPage } from "./Info/QuenSomosPage/QuenSomosPage";
import { SostenibilidadPage } from "./Info/SostenibilidadPage/SostenibilidadPage";
import { PeoplePage } from "./PeoplePage/PeoplePage";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";

export const pages = {
  landing: <LandingPage />,
  errorPage: <ErrorPage />,
  noticiasPage: <NoticiasPage />,
  programacionPage: <ProgramacionPage/>,
  echoesPage: <EchoesPage/>,
  programaPage: <ProgramaPage />,
  sectionPage: <SectionPage/>,
  sessionPage: <SessionPage/>,
  quenSomosPage: <QuenSomosPage/>,
  sostenibilidadPage: <SostenibilidadPage/>,
  peoplePage: <PeoplePage/>,
  notFoundPage: <NotFoundPage/>
};
