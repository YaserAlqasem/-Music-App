import { Box } from "@mui/system";
import { Card } from "@mui/material";
import SpatialAudioIcon from "@mui/icons-material/SpatialAudio";
import img from "../images/artist.png";
import CardsList from "../Components/CardsList";
import CardHeader from "../Components/CardHeader";

const Artists = ({ lstArtists }) => {
  return (
    <Card sx={{ width: "auto", padding: 2 }}>
      <CardHeader icon={<SpatialAudioIcon />} />
      <Box sx={{ display: "flex", marginTop: 1 }}>
        {lstArtists.map((ele) => {
          return <CardsList id={ele.id_artist} name={ele.artist} img={img} />;
        })}
      </Box>
    </Card>
  );
};

export default Artists;
