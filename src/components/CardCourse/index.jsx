import React from "react";
import { Link } from "react-router-dom";
import "./cardCourse.css";

const CardCourse = ({ card }) => {
  return (
    <div className="cardcourse" key={card.id}>
      <Link to="/">
        <img src={card.img} alt="cardImage" />
      </Link>
    </div>
  );
};

export default CardCourse;
