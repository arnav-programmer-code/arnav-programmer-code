import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </>
  );
}

export default App;
