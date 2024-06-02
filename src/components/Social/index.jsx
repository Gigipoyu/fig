import React from "react";
import "./social.css";

const Social = () => {
  return (
    <div className="container-social">
      <div className="social">
        <div className="logo">
          <img src="insta.png" alt="" />
        </div>
        <div className="followers">
          <p className="pm">2,793,101</p>
          <p className="pp">FOLLOWERS</p>
        </div>
      </div>
      <div className="social">
        <div className="logo">
          <img src="facebook.png" alt="" />
        </div>

        <div className="followers">
          <p className="pm">6,105,580</p>
          <p className="pp">FOLLOWERS</p>
        </div>
      </div>
      <div className="social">
        <div className="logo twitter">
          <img src="xlogo.png" alt="" />
        </div>

        <div className="followers">
          <p className="pm">653,443</p>
          <p className="pp">FOLLOWERS</p>
        </div>
      </div>
      <div className="social">
        <div className="logo">
          <img src="youtube.png" alt="" />
        </div>
        <div className="followers">
          <p className="pm">2,430,000</p>
          <p className="pp">FOLLOWERS</p>
        </div>
      </div>
    </div>
  );
};

export default Social;
