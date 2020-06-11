import React from "react";
import "./style.css";
function NavBar() {
  return (
    <div className="about-container">
      <span><a href="#about" className="about-text">About</a></span>
      <span><a href="#projects" className="about-text">Projects</a></span>
      <span><a href="#team" className="about-text">Team</a></span>
    </div>
  );
}
export default NavBar;
