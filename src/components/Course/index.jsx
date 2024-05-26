import React from "react";
import "./course.css";
import data from "../../data/data.json";
import CardCourse from "../CardCourse";

const Course = () => {
  return (
    <div className="container-course">
      <div className="text">
        <h2>TAI'S BESTSELLING</h2>
        <h1>COURSES & TRAININGS</h1>
      </div>
      <div className="gallery-course">
        {data.cards.map((card) => (
          <CardCourse card={card} />
        ))}
      </div>
    </div>
  );
};

export default Course;
