import React from "react";
import "./About.css";
import profile from "../../public/vite.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="Profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with 3 years of experience
              in building responsive and user-friendly web applications. I
              mostly work on React, HTML, and Tailwind CSS. I grew up in Delhi,
              India, and decided to become a developer at the age of 10.
            </p>
            <p>
              My passion for web development started when I built my first
              website using HTML and CSS. Since then, I have been fascinated by
              the endless possibilities of creating beautiful and functional
              user interfaces. I enjoy learning new technologies and staying
              up-to-date with the latest trends in web development.
            </p>
          </div>

          <div className="about-skills">
            {/* JavaScript */}
            <div className="about-skill">
              <div className="skill-label">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript Logo"
                />
                <p>JavaScript</p>
              </div>
              <hr
                style={{
                  width: "10%",
                  border: "3px solid #FFD700",
                  borderRadius: "10px",
                }}
              />
            </div>

            {/* HTML & CSS */}
            <div className="about-skill">
              <div className="skill-label">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML Logo"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS Logo"
                />
                <p>HTML & CSS</p>
              </div>
              <hr
                style={{
                  width: "20%",
                  border: "3px solid #FF7F50",
                  borderRadius: "10px",
                }}
              />
            </div>

            {/* React */}
            <div className="about-skill">
              <div className="skill-label">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React Logo"
                />
                <p>React</p>
              </div>
              <hr
                style={{
                  width: "70%",
                  border: "3px solid #00BFFF",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>50+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>HAPPY CLIENTS!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
