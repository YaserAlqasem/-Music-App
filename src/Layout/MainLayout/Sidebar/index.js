import { drawerWidth } from "../../../Common/constants";
import PerfectScrollbar from "react-perfect-scrollbar";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import SpatialAudioIcon from "@mui/icons-material/SpatialAudio";
import {
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Typography,
} from "@mui/material";
import { useEffect } from "react";

const Sidebar = ({ drawerOpen, setDrawerOpen }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const handleLeftDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    setDrawerOpen(matchUpMd);
  }, [matchUpMd]);

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : "auto" }}
    >
      <Drawer
        variant={matchUpMd ? "persistent" : "temporary"}
        open={drawerOpen}
        anchor="left"
        onClose={handleLeftDrawerToggle}
        ModalProps={{ keepMounted: true }}
        color="inherit"
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: "none",
            [theme.breakpoints.up("md")]: {
              top: "88px",
            },
          },
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: "block", md: "none" }, flexGrow: 1 }}
        >
          <Box sx={{ display: "flex", p: 2, mx: "auto" }}>
            <Typography
              variant="h5"
              sx={{ color: (theme) => theme.palette.primary.main }}
            >
              Music App
            </Typography>
          </Box>
        </Box>
        <PerfectScrollbar
          component="div"
          style={{
            height: "calc(100vh - 88px)",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <List component="div" disablePadding>
            {["Artists", "Albums"].map((text, index) => (
              <ListItem key={text}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <SpatialAudioIcon />
                    ) : (
                      <PlaylistPlayIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" color="inherit">
                        {text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </PerfectScrollbar>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
