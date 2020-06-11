import React from "react";
import "./style.css";
import logo from "../images/logo.jpg";
function Projects() {
  return (
    <div className="section" id="projects">
      <div className="row">
        <div className="col-xs-3" style={{ borderRadius: "50px!important" }}>
          <img
            src={logo}
            alt="Skill"
            style={{ borderRadius: "50%!important" }}
          />
        </div>
        <div className="col-xs-9">
          <div className="ptitle">
            Projects
          </div>

          <div className="pbody">
            <p> About Codesis</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
