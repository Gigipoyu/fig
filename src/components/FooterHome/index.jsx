import React from "react";
import "./footerHome.css";
import { NavLink, Link } from "react-router-dom";

const FooterHome = () => {
  return (
    <div className="container-footer">
      <div className="first">
        <ul>
          <NavLink to="/">
            {"/"}
            <li className="">BLOG</li>
          </NavLink>
          <NavLink to="/">
            {"/"}
            <li className="">RESELL PROFITABLE PRODUCTS</li>
          </NavLink>
          <NavLink to="/">
            {"/"}
            <li className="">SMMA 3.0</li>
          </NavLink>
          <NavLink to="/">
            {"/"}
            <li className="">67 STEPS</li>
          </NavLink>
          <NavLink to="/">
            {"/"}
            <li className="">67 STEPS E-BOOKS</li>
          </NavLink>
          <NavLink to="/">
            {"/"}
            <li className="">QUIZ</li>
          </NavLink>
          <NavLink to="/">
            {"/"}
            <li className="">BOOKS</li>
          </NavLink>
          <NavLink to="/">
            {"/"}
            <li className="">MOVIES</li>
          </NavLink>
          <NavLink to="/">
            {"/"}
            <li className="">PODCAST</li>
          </NavLink>
          <NavLink to="/">
            {"/"}
            <li className="">CARRERS</li>
          </NavLink>
          <NavLink to="/">
            {"/"}
            <li className="">WIN</li>
          </NavLink>
          <NavLink to="/">
            {"/"}
            <li className="">ABOUT</li>
          </NavLink>
          <NavLink to="/">
            {"/"}
            <li className="">PODCAST</li>
          </NavLink>
          <NavLink to="/">
            {"/"}
            <li className="">HELP</li>
          </NavLink>
          <NavLink to="/">
            {"/"}
            <li className="">LOGIN</li>
          </NavLink>
        </ul>
      </div>

      <div className="second">
        <div className="rasta">
          <p>
            <ul className="zumba">
              <li>Policies: </li>

              <div className="azul">
                <NavLink to={"/"}>
                  <li>TERMS OF USE</li>
                </NavLink>
                <NavLink to={"/"}>
                  <li>PRIVACY POLICY</li>
                </NavLink>
                <NavLink to={"/"}>
                  <li>DMCA POLICY</li>
                </NavLink>
                <li>
                  <span className="copyrigth">© 2011-2024 Tailopez.com</span>
                </li>
              </div>
            </ul>
            <div className="macho">
              <p className="jean">
                1.800.604.2587 |{" "}
                <span className="michi">
                  1680 Michigan ave suite 700 Miami Beach, FL 33139
                </span>
              </p>
            </div>
          </p>
          <div className="img">
            <img src="img.png" alt="img" />
          </div>
          <p>
            <ul className="bworg">
              <span className="policie">Policies:</span>
              <NavLink to={"/"}>
                <li className="lit">TERMS OF USE</li>
              </NavLink>
              <NavLink to={"/"}>
                <li className="lit">PRIVACY POLICY</li>
              </NavLink>
              <NavLink to={"/"}>
                <li className="lit">DMCA POLICY</li>
              </NavLink>
            </ul>
          </p>
        </div>

        <p>
          This site is not a part of the Facebook website or Facebook Inc.
          Additionally, This site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
        <p className="impo">IMPORTANT: Earnings and Legal Disclaimers</p>
        <p>
          *Earnings and income representations made by Tai Lopez, tailopez.com,
          67 Steps, 67 Steps upsells, Traveling CEO, Real Estate Investing,
          Social Media Marketing Agency, and their advertisers/sponsors
          (collectively, "Tai Lopez Programs") are aspirational statements only
          of your earnings potential. The success of Tai Lopez, testimonials and
          other examples used are exceptional, non-typical results and are not
          intended to be and are not a guarantee that you or others will achieve
          the same results. Individual results will always vary and yours will
          depend entirely on your individual capacity, work ethic, business
          skills and experience, level of motivation, diligence in applying the
          Tai Lopez Programs, the economy, the normal and unforeseen risks of
          doing business, and other factors.
        </p>
        <p>
          The Tai Lopez Programs, and Tai Lopez individually, are not
          responsible for your actions. You are solely responsible for your own
          moves and decisions and the evaluation and use of our products and
          services should be based on your own due diligence. You agree that the
          Tai Lopez Programs are not liable to you in any way for your results
          in using our products and services. See our{"user"}
          <NavLink to={"/"}>
            <span className="user">Terms & Conditions</span>
          </NavLink>{" "}
          for our full disclaimer of liability and other restrictions.
        </p>
        <p>
          The Tai Lopez Programs, including Tai Lopez personally, may receive
          compensation for products and services they recommend to you. Tai
          Lopez personally uses a recommended resource unless it states
          otherwise. If you do not want the Tai Lopez Programs and Tai Lopez to
          be compensated for a recommendation, then we advise that you search
          online for the item through a non-affiliate link.
        </p>
        <p>
          Do you have questions about any of the Tai Lopez Programs? Are you
          wondering if the programs will work for you? Give us a call at
          800-604-2587. We will be happy to discuss your goals and how the Tai
          Lopez programs may help you.
        </p>
        <p>
          Contact Support: support@tailopez.com Legal Contact:
          Legal@tailopez.com
        </p>
        <p>
          Website Monetization, LLC 1680 Michigan ave suite 700 Miami Beach, FL
          33139
        </p>
        <p>Website Monetization, LTD 48-49 Princes Place, London W11 4QA</p>
      </div>
    </div>
  );
};

export default FooterHome;
