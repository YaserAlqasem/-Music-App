import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const CardsList = (props) => {
  return (
    <Card sx={{ maxWidth: 200, marginRight: 0.9 }} key={props.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardsList;
