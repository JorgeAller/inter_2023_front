import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu";
import BackButton from "../components/BackButton";
import { BotonesColores } from "../components/BotonesColores/BotonesColores";

const Layout = () => {
  return (
    <>
      <SideBar />
      <BackButton />
      <BurgerMenu />
      <BotonesColores />

      <Box
        component="main"
        sx={{
          display: "flex",
        }}
      >
        <Box component="div">
          <Outlet />
        </Box>

        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default Layout;
