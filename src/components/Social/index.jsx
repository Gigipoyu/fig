import React from "react";
import "./social.css";

const Social = () => {
  return (
    <div className="container-social">
      <div className="social-insta">
        <div className="logo-insta">
          <img src="" alt="" />
        </div>
        <div className="followers">
          <p>FOLLOWERS</p>
        </div>
        <div className="numbers-insta">
          <p>2,793,101</p>
        </div>
      </div>
      <div className="social-facebook">
        <div className="logo-facebook">
          <img src="" alt="" />
        </div>
        <div className="followers-">
          <p>FOLLOWERS</p>
        </div>
        <div className="numbers-facebook">
          <p>6,105,580</p>
        </div>
      </div>
      <div className="social-twitter">
        <div className="logo-twitter">
          <img src="" alt="" />
        </div>
        <div className="followers">
          <p>FOLLOWERS</p>
        </div>
        <div className="numbers-twitter">
          <p>653,443</p>
        </div>
      </div>
      <div className="social-youtube">
        <div className="logo-youtube">
          <img src="" alt="" />
        </div>
        <div className="followers">FOLLOWERS</div>
        <div className="numbers-youtube">
          <p>2,430,000</p>
        </div>
      </div>
    </div>
  );
};

export default Social;
