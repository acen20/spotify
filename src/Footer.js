import React from "react";
import "./Footer.css";
import PlayerCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div class="footer">
      <div className="footer-left">
        <p>Album and song details</p>
      </div>

      <div className="footer-center">
        <ShuffleIcon className="footer-green" />
        <SkipPreviousIcon className="footer-icon" />
        <PlayerCircleOutlineIcon fontSize="large" />
        <SkipNextIcon className="footer-icon" />
        <RepeatIcon className="footer-icon" />
      </div>

      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
