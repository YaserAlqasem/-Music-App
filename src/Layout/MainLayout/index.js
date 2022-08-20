import { AppBar, Box, Toolbar } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const handleLeftDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        elevation={0}
        sx={{ bgcolor: (theme) => theme.palette.background.default }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>
      <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <MainContent drawerOpen={drawerOpen}>
        <Outlet />
      </MainContent>
    </Box>
  );
};

export default MainLayout;
