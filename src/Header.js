import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon />
        <input className="" type="text" name="" value="" placeholder="Search" />
      </div>
      <div className="header-right"></div>
    </div>
  );
}

export default Header;
