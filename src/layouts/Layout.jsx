import { Box, useMediaQuery, useTheme } from "@mui/material";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu";
import BackButton from "../components/BackButton";
import { BotonesColores } from "../components/BotonesColores/BotonesColores";
import Footer from "../components/Footer";
import LogoInterseccion from "../components/LogoInterseccion";
import { useSelector } from "react-redux";
import { BASIC_URL } from "../App";

const Layout = () => {
  const theme = useTheme()
  const isScreenSizeXSorSM = useMediaQuery(theme.breakpoints.down('md'))

  const {darkMode} = useSelector((state)=>state.configuration);

  const cursor = "../"

  return (
    <>
      { !isScreenSizeXSorSM && <SideBar />}
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          marginLeft: {md: '330px'},
          backgroundColor: darkMode ? "black" : 'white',
        }}
      >
        {isScreenSizeXSorSM
          ? <LogoInterseccion />
          : <BackButton />

        }
        {!isScreenSizeXSorSM && <BotonesColores />}
        <BurgerMenu />
      </Box>

      <Box
        component="main"
        sx={{
          backgroundColor: darkMode ? "black" : 'white',
          display: "flex",
          marginLeft: {
            xs: 0,
            md: '330px',
          },
        }}
      >
        <Box component="div">
          <Outlet />
        </Box>

      </Box>
      <Footer />
    </>
  );
};

export default Layout;
