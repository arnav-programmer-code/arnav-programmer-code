import React from "react";
import "./Hero.css";
import profile from "../../public/vite.png";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile} alt="Profile" className="profile" />
      <h1>
        <span>I'm Arnxv</span>, frontend developer based in India.
      </h1>
      <p>
        I am a frontend developer with a passion for creating beautiful and
        functional user interfaces. I belong to Delhi, India. I have experience
        working with ReactJS, HTML, and CSS.
      </p>
      <div className="hero-actions">
        <div className="hero-connect">Connect with Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
