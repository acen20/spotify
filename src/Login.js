import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        className=""
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <a href={loginUrl} className="">
        LOGIN WITH SPOTIFY
      </a>
      <div className="login-footer">
        <h1>Cloned by</h1>
        <p>&nbsp;Ahsen Nazir</p>
      </div>

      {/*<div class="g-signin2" data-onsuccess="onSignIn"></div>*/}
    </div>
  );
}

export default Login;
