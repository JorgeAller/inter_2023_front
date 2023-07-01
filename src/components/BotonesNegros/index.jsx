import { useSelector } from "react-redux";
import "./style.css";
const BotonesNegros = () => {

  const selectedColor = useSelector((state)=>state.configuration.color)

  return (
    <ul className="menuButtons">
      {/* <li className="menuButton">
        <a href={`${BASIC_URL}/`}>INICIO</a>
      </li>
      <li className="menuButton">
        <a href="/noticias">NOTICIAS</a>
      </li> */}
      <li className="menuButton">
        <a className="menuButtonLink" style={{color: selectedColor}} href="https://mailchi.mp/283caa783843/interseccion">NEWSLETTER</a>
      </li>
    </ul>
  );
};

export default BotonesNegros;
