import React from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ weekly }, dispatch] = useDataLayerValue();

  function calculateDuration(tracks) {
    var sum = 0;
    for (var i = 0; i < tracks?.length; i++) {
      sum += tracks[i].track.duration_ms;
    }
    var secs = Math.floor(sum / 1000);
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs % 3600) / 60);
    var str = hr + " hr" + " " + min + " min";
    return str;
  }
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body-info">
        <img className="" src={weekly?.images[0]?.url} alt="" />
        <div className="body-info-text">
          <strong>PLAYLIST</strong>
          <h2>{weekly?.name}</h2>
          <p>{weekly?.description}</p>
          <div className="album-stats">
            <a href={weekly?.owner?.external_urls?.spotify}>
              {weekly?.owner?.display_name}
            </a>
            <b>•</b>
            <p>{weekly?.followers?.total} likes</p>
            <b>•</b>
            <p>
              {weekly?.tracks?.items.length} songs,{" "}
              {calculateDuration(weekly?.tracks.items)}
            </p>
          </div>
        </div>
      </div>

      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledIcon className="body-shuffle" />
          <FavoriteIcon className="heart-green" fontSize="large" />
          <MoreHorizIcon />
        </div>
        <div className="songs-list">
          {weekly?.tracks?.items?.map((item) => (
            <SongRow key={item.id} track={item.track} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
