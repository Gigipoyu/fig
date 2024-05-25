import React from "react";
import "./headerHome.css";
import { NavLink, Link } from "react-router-dom";
import Carrousel from "../Carrousel";
import Social from "../Social";
import Layout from "../Layout";

const HeaderHome = () => {
  return (
    <>
      <div className="container-header">
        <div className="header-up">
          <div className="header-up-left">
            <p>
              1.800.604.2587 |{" "}
              <span>1680 Michigan Ave Suite 700 Miami Beach, FL 33139</span>
            </p>
          </div>
          <div className="header-up-rigth">
            <NavLink to="/" className="nav-item">
              <p className="nav-item-p">HELP</p>
            </NavLink>
            <NavLink to="/" className="nav-item">
              <p className="nav-item-p">LOGIN</p>
            </NavLink>
          </div>
        </div>
        <div className="header-down">
          <div className="header-down-left">
            <img src="logo.png" alt="" />
          </div>
          <div className="header-down-rigth">
            <div className="link">
              <ul>
                <NavLink>
                  {"/"}
                  <li className="linku4">3 TRENDS BOOKS</li>
                </NavLink>
                <NavLink>
                  {"/"}
                  <li className="linku3">COURSE OVERVIEW</li>
                </NavLink>
                <NavLink>
                  {"/"}
                  <li className="linku2">EVENTS</li>
                </NavLink>
                <NavLink>
                  {"/"}
                  <li>12 TYPES QUIZZ</li>
                </NavLink>
                <NavLink>
                  {"/"}
                  <li className="linku1">PRIVATE MENTORING</li>
                </NavLink>
                <NavLink>
                  {"/"}
                  <li>RECOMMENDED BOOKS LIST</li>
                </NavLink>
                <NavLink>
                  {"/"}
                  <li className="linku">FREE MENTOR TIPS</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Carrousel />
      <Social />
      <Layout />
    </>
  );
};

export default HeaderHome;
