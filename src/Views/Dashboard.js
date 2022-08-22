import { useEffect, useState } from "react";
import httpClient from "../httpClient";
import Artists from "./Artists";

const Dashboard = () => {
  const [lstArtists, setArtists] = useState([]);
  const [lstAlbums, setAlbums] = useState([]);
  const [lstTracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchInitData = async () => {
      try {
        const response = await httpClient.get("", { q: "Latest" });
        const dataDistinct = getDistinctItems(response.data);

        setArtists(dataDistinct.lstArtists);
        setAlbums(dataDistinct.lstAlbums);
        setTracks(dataDistinct.lstTracks);
      } catch (err) {
        console.log(err);
      } finally {
      }
    };
    fetchInitData();
  }, []);

  const getDistinctItems = (data) => {
    let lstArtists = [];
    let lstAlbums = [];
    let lstTracks = [];
    data.result.forEach((dataItem) => {
      if (!lstArtists.find((item) => item.id_artist === dataItem.id_artist)) {
        lstArtists.push(dataItem);
      }
      if (!lstAlbums.find((item) => item.id_album === dataItem.id_album)) {
        lstAlbums.push(dataItem);
      }
      if (!lstTracks.find((item) => item.id_track === dataItem.id_track)) {
        lstTracks.push(dataItem);
      }
    });
    return { lstArtists, lstAlbums, lstTracks };
  };

  return lstArtists && <Artists lstArtists={lstArtists.slice(0, 5)} />;
};

export default Dashboard;
