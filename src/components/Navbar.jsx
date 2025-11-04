import React from "react";
import "./Navbar.css";
import logo from "../../public/vite.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <ul className="nav-menu">
        <li
          onClick={() =>
            document
              .getElementById("home")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Home
        </li>
        <li
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          About Me
        </li>
        <li
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact
        </li>
      </ul>
      <div
        className="nav-connect"
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Connect with Me
      </div>
    </div>
  );
};

export default Navbar;
