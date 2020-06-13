import React from 'react';
import './Banner.css'
import AllHands from 'assets/images/all-hands.jpg';

const banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <img src={AllHands} className="img-fluid" alt="Welcome"></img>
                {<div className="banner-content">
                    <h1>Begin</h1>
                    <p>Your <strong>Open Source</strong> Journey!</p>
                </div>}
            </div>
        </section>
    );
}

export default banner;