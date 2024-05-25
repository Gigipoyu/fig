import React from "react";
import "./seen.css";
import { NavLink, Link } from "react-router-dom";

const Seen = () => {
  return (
    <div className="container-seen">
      <img src="Bseen.png" alt="" />
      <Link div className="m__forbes" to={"/"}></Link>
      <Link div className="m__ondon" to={"/"}></Link>
      <Link div className="m__nbc" to={""}></Link>
      <Link div className="m__bravo" to={""}></Link>
      <Link div className="m__ted" to={""}></Link>
      <Link div className="m__usc" to={""}></Link>
    </div>
  );
};

export default Seen;
