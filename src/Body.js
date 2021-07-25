import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";

function Body({ spotify }) {
  const [{ weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body-info">
        <img className="" src={weekly?.images[0]?.url} alt="" />
        <div className="body-info-text">
          <strong>PLAYLIST</strong>
          <h2>{weekly?.name}</h2>
          <p>{weekly?.description}</p>
        </div>
      </div>

      <div className="body-songs"></div>
    </div>
  );
}

export default Body;
