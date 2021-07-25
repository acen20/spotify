import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon />
        <input
          className=""
          type="text"
          name=""
          value=""
          placeholder="Search for Artists, Songs or Playlists"
        />
      </div>
      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt={user?.diplay_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
