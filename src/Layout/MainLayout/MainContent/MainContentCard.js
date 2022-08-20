import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

const MainContentCard = ({ title, children }) => {
  return (
    <Card sx={{ height: "100%" }}>
      {title && (
        <>
          <CardHeader title={<Typography variant="h6">{title}</Typography>} />
          <Divider />
        </>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default MainContentCard;
