import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const CardsList = (props) => {
  return props.data.map((item) => {
    return (
      <Card sx={{ maxWidth: 200, marginRight: 0.9 }} key={item[props.id]}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={props.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {item[props.labelField]}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });
};

export default CardsList;
