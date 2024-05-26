import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="container-form">
      <div className="title-form">
        <h2 className="title-connect">CONNECT WITH</h2>
        <h1 className="title-tai">TAI LOPEZ</h1>
      </div>
      <form>
        <div className="container-form">
          <h6 className="Mentor">
            Get Tai's FREE "MENTOR TIPS" summary delivered to your inbox!
          </h6>
          <input type="text" name="name" placeholder="Enter Your Name..." />
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email Adress..."
          />
          <label>
            <input type="checkbox" name="consent" id="1" />
            Our goal is to provide world class customer support by delivering
            the most current information to our customers. By providing your
            information today, you are giving consent to contact you by mail,
            phone, text or email using automated technology to the data
            provided, even if the phone number is present on a state or national
            Do Not Call list.
          </label>
          <button className="btn btn-layout" type="button">
            Continue
          </button>
          <p>
            By using our site, you agree to the TaiLopez.com Terms of Use and
            Privacy Policy.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
