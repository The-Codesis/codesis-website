import React from "react";
import "./style.css";
import logo from "../images/logo.jpg";
function About() {
  return (
    <div className="section">
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
            <h1>About</h1>{" "}
          </div>

          <div className="pbody">
            <h3> About Codesis</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
