import { styled } from "@mui/material";
import { drawerWidth } from "../../../Common/constants";
import MainContentCard from "./MainContentCard";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
      }),
      [theme.breakpoints.up("md")]: {
        marginLeft: -(drawerWidth - 20),
      },
      [theme.breakpoints.down("md")]: {
        marginLeft: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "10px",
      },
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
      }),
      marginLeft: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      [theme.breakpoints.down("md")]: {
        marginLeft: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "10px",
      },
    }),
  })
);

const MainContent = ({ drawerOpen, children }) => {
  return (
    <Main open={drawerOpen}>
      <MainContentCard>{children}</MainContentCard>
    </Main>
  );
};

export default MainContent;
