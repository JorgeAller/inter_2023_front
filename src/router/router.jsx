import { createBrowserRouter } from "react-router-dom";
import { pages } from "../pages";
import Layout from "../layouts/Layout.jsx";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  // Rutas básicas
  { path: "/", element: pages.landing },
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "noticias", element: pages.noticiasPage },
      { path: "programa", element: pages.programacionPage },
      { path: "echoes", element: pages.echoesPage },
      /*       { path: "noticias", element: pages.noticiasPage } */
    ],
  },
]);
