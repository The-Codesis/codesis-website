import React from "react";
import "./style.css";
import logo from "../images/logo.jpg"
import discord from "../images/discord.png"
import slack from "../images/slack.png"
import gh from "../images/gh.png"
function Contact(){
    return (
        <div className="section" id="contact">
            <div className="row">
        <div className="col-xs-3" style={{ borderRadius: "50px!important" }}>
          <img
            src={logo}
            alt="logo"
            style={{ borderRadius: "50%!important" }}
          />
        </div>
        <div className="col-xs-9">
          <div className="ptitle">
            Contact Us{" "}
          </div>

          <div className="pbody">
            <p>Want to join our community? You can find us on :</p>
            <p> 
               <span className="handle"> <a href="https://discord.gg/B3Ce9YE" target="__blank" className="link"><img src={discord} alt="discord" className="contact-icon"/> Discord</a> </span>
               <span className="handle"> <a href="https://lnkd.in/gYac5Ci" target="__blank" className="link"><img src={slack} alt="slack" className="contact-icon"/> Slack</a></span>
            </p>
          </div>
          
        </div>
      </div>
        </div>
    )
}
export default Contact;
