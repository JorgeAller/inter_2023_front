import { EchoesPage } from "./EchoesPage/EchoesPage";
import { ErrorPage } from "./ErrorPage/ErrorPage";
import { LandingPage } from "./LandingPage";
import { NoticiasPage } from "./NoticiasPage";
import { ProgramacionPage } from "./ProgramacionPage/ProgramacionPage";

export const pages = {
  landing: <LandingPage />,
  errorPage: <ErrorPage />,
  noticiasPage: <NoticiasPage />,
  programacionPage: <ProgramacionPage/>,
  echoesPage: <EchoesPage/>
};
