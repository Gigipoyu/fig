import React from "react";
import "./layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout-left">
        GET TAI'S <span className="free"> FREE MENTOR TIPS </span> SUMMARY
        DELIVERED TO YOUR INBOX!
      </div>
      <div className="layout-rigth">
        <button className="btn btn-layout" type="button">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Layout;
