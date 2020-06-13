import React, { Component } from 'react';
import Navbar from 'modules/navigation/navbar/Navbar.js';
import Footer from 'modules/navigation/footer/Footer.js';


class Layout extends Component {
    state = {}
    render() {
        const { children } = this.props;

        return (
            <React.Fragment>
                <Navbar />
                    {children}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;