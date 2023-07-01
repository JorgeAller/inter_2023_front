import { useNavigate } from "react-router-dom";
import TituloBannerMove from "../../components/TituloBannerMove";

import "./style.css";

export const NoticiaIndividualPage = ({ noticia }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="contenido">
        <div
          onClick={(event) => {
            navigate("/noticias");
          }}
        >
          <TituloBannerMove
            titulo={
              <div className="noticiaTitlePaginaIndividual">
                NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp;
                NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp;
                NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp;
                NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp; NOTICIAS &nbsp;
              </div>
            }
            speed={60}
            nameSection={true}
          ></TituloBannerMove>
        </div>
        {noticia}
      </div>
    </>
  );
};

