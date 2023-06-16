import { useNavigate } from "react-router-dom";
import "./style.css";
import { BASIC_URL } from "../../App";

const LogoInterseccion = () => {
  const navigate = useNavigate();

  return (
    <div className="logoInterseccion">
      <img
        src={`${BASIC_URL}/images/logoInterseccion.png`}
        alt="logoIntersección"
        onClick={() => {
          navigate("/");
        }}
      ></img>
    </div>
  );
};

export default LogoInterseccion;
