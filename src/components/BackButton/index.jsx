import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";
import LogoInterseccion from "../LogoInterseccion";

const BackButton = () => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="backButton">
      {screenWidth < 500 ? (
        <LogoInterseccion></LogoInterseccion>
      ) : (
        <div
          onClick={() => {
            navigate(-1);
          }}
        >
          atrás
        </div>
      )}
    </div>
  );
};

export default BackButton;
