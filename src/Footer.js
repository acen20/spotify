import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div class="footer">
      <div className="footer-left">
        <p>Album and song details</p>
      </div>

      <div className="footer-center">
        <p>Player controls</p>
      </div>

      <div className="footer-right">
        <p>Volume controls</p>
      </div>
    </div>
  );
}

export default Footer;
