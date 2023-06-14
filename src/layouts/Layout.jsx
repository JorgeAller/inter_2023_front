import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
      }}
    >
      <SideBar />

      <Box component="div">
        <Outlet />
      </Box>

      {/* <Footer /> */}
    </Box>
  );
};

export default Layout;
