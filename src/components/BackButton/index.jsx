import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";
import LogoInterseccion from "../LogoInterseccion";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";

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

  const theme = useTheme();
  const isScreenSizeXSorSM = useMediaQuery(theme.breakpoints.down('md'))

  const darkMode = useSelector((state) => state.configuration.darkMode);

  return (
    <div className="backButton">
        <Box
            onClick={() => {
                navigate(-1);
            }}
            sx={{
                fontSize: '40px',
                fontWeight: 900,
                textTransform: 'upeprcase',
                color: 'transparent',
                lineHeight: 1.4,
                WebkitTextStroke: darkMode ? '2px white' : '2px black'
            }}
        >
          atrás
        </Box>
      
    </div>
  );
};

export default BackButton;
