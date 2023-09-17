import { Box } from "@mui/material";
import "./style.css";
import { useSelector } from "react-redux";
import LogoInterseccion from "../LogoInterseccion";

const Footer = () => {
  const selectedColor = useSelector((state)=>state.configuration.color)

  return (
    <Box 
      sx={{
        height: '250px', 
        color: 'white', 
        mt: 'auto',
        ml: {
          lg: '328px'
        },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderTop: '2px solid black',
        position: 'relative',
        backgroundColor: selectedColor,
        paddingRight: '50px'
      }}
    >
      <ul className="documentosLegales">
        <li className="docsButton">
          <a href="/aviso-legal">Aviso legal</a>
        </li>
        <li className="docsButton">
          <a href="/politica-de-privacidad">Política de privacidade</a>
        </li>
        <li className="docsButton">
          <a href="/politica-de-cookies">Política de cookies</a>
        </li>
        <li className="docsButton">
          <a href="/aviso-legal">Aviso legal</a>
        </li>
        <li className="docsButton">
          <a href="/politica-de-privacidad">Política de privacidade</a>
        </li>
        <li className="docsButton">
          <a href="/politica-de-cookies">Política de cookies</a>
        </li>
      </ul>
      <ul className="documentosLegales">
        <li className="docsButton">
          <a href="/aviso-legal">Aviso legal</a>
        </li>
        <li className="docsButton">
          <a href="/politica-de-privacidad">Política de privacidade</a>
        </li>
        <li className="docsButton">
          <a href="/politica-de-cookies">Política de cookies</a>
        </li>
        <li className="docsButton">
          <a href="/aviso-legal">Aviso legal</a>
        </li>
        <li className="docsButton">
          <a href="/politica-de-privacidad">Política de privacidade</a>
        </li>
        <li className="docsButton">
          <a href="/politica-de-cookies">Política de cookies</a>
        </li>
      </ul>
      <LogoInterseccion/>
    </Box>
  );
};

export default Footer;
