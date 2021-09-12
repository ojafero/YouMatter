import React from "react";
import "./SplashPage.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Link } from "react-router-dom";

function SplashPage() {
  let description =
    "A goverment initiative to enable people with invisible disabilities use the services they need without fear of backlash from the rest of the community through the use of visible badges";
  return (
    <div className="SplashPage">
      <div className="SplashPage__title">You Matter.</div>
      <div className="SplashPage__description">{description}</div>
      <Link to="/home">
        <div className="SplashPage__button">
          <AwesomeButton type="primary" size="large">
            Enter
          </AwesomeButton>
        </div>
      </Link>
    </div>
  );
}

export default SplashPage;
