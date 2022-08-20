import {
  Avatar,
  Box,
  Typography,
  ButtonBase,
  styled,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();
  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    ...theme.palette.commonAvatar,
    transition: theme.transitions.create(["background", "color"]),
  }));

  return (
    <>
      <Box
        sx={{
          width: 228,
          display: "flex",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        >
          <Typography
            variant="h5"
            sx={{ color: (theme) => theme.palette.primary.main }}
          >
            Music App
          </Typography>
        </Box>
        <ButtonBase
          sx={{ borderRadius: "12px", overflow: "hidden" }}
          onClick={handleLeftDrawerToggle}
        >
          <StyledAvatar
            variant="rounded"
            sx={{
              ...theme.typography.mediumAvatar,
              ...theme.palette.secondaryAvatar,
            }}
          >
            <MenuIcon />
          </StyledAvatar>
        </ButtonBase>
      </Box>
    </>
  );
};

export default Header;
