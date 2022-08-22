import { Box } from "@mui/system";
import { Typography, CardHeader } from "@mui/material";
import colors from "../Themes/ThemeColors";

const cardHeader = (props) => {
  return (
    <CardHeader
      sx={{
        backgroundColor: colors.primaryLight,
        borderRadius: 1,
      }}
      title={
        <Box sx={{ display: "flex" }}>
          <Box sx={{ marginRight: 1 }}>{props.icon}</Box>
          <Box>
            <Typography variant="h6">Artists</Typography>
          </Box>
        </Box>
      }
    />
  );
};

export default cardHeader;
