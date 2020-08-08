import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';

function NavBar({onClick, darkTheme}) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark custom-color">
      <a class="navbar-brand custom-link" href="#">Codesis</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-link active custom-link" href="#">About <span class="sr-only">(current)</span></a>
          <a class="nav-link custom-link" href="#">Projects</a>
          <a class="nav-link custom-link" href="#">Team</a>
          <button className="btn btn-outline-warning" onClick={onClick}>{darkTheme? 'Light':'Dark'}</button>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
