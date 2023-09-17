import { useNavigate } from "react-router-dom";
import { BASIC_URL } from "../../App";
import { Box } from "@mui/material";

const LogoInterseccion = () => {
  const navigate = useNavigate();

  return (
    <Box 
        component='img' 
        src={`${BASIC_URL}/images/logoInterseccion.png`}
        alt="logoIntersección"
        onClick={() => {
          navigate("/");
        }}
        sx={{
            width: '175px'
        }}
    >
    </Box>
  );
};

export default LogoInterseccion;
