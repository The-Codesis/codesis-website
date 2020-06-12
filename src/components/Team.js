import React from "react";
import "./style.css";
import logo from "../images/logo.jpg";
function Team() {
  return (
    <div className="section" id="team">
      <div className="row">
        <div className="col-xs-3" style={{ borderRadius: "50px!important" }}>
          <img
            src={logo}
            alt="Skill"
            style={{ borderRadius: "50%!important" }}
          />
        </div>
        <div className="col-xs-9">
          <div className="ptitle">Team</div>

          <div className="pbody">
            <p> Meet our Team of Mentors </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
