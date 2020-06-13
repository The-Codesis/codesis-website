import React, { Component } from 'react';
import './Navbar.css';
import * as logo from 'assets/images/logo.jpg';


class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container d-flex justify-content-between">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="img-fluid" alt="Responsive image" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <a className="nav-item nav-link" href="#">Home</a>
                            <a className="nav-item nav-link" href="#">Features</a>
                            <a className="nav-item nav-link" href="#">About Us</a>
                            <a className="nav-item nav-link" href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;