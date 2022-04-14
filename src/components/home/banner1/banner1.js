import React from "react";
import "./banner1.css";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialGooglePlusCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
function Banner1() {
  return (
    <>
      <div className="container1">
        <div className="container1-background">
          <div className="container1-box1">
            <h1 className="container1-box1-heading">
              Where data and
              <br /> creativity come <br />
              together!
            </h1>
            <p className="container1-box1-para">
              From designing to coding, pilot to scaling and heuristics to
              machine learning, building your dreams!
            </p>
            <div className="container1-box1-Social-icons">
              <TiSocialLinkedinCircular className="c1-icon" />
              <TiSocialTwitterCircular className="c1-icon" />
              <TiSocialGooglePlusCircular className="c1-icon" />
              <TiSocialFacebookCircular className="c1-icon" />
            </div>
          </div>

          <div className="container1-box1-img">
            <img src={require("./Team-amico.png")} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner1;
