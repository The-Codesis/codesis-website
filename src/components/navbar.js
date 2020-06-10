import React from "react";
import "./style.css";
function NavBar() {
  return (
    <div style={{ paddingRight: '0px !important'}}className="about-container">
      <span className="about-text">About</span>
      <span className="about-text">Projects</span>
      <span className="about-text">Team</span>
    </div>
  );
}
export default NavBar;
