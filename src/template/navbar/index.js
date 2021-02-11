import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="nav-bar">
                <Link to="/form">
                    <div className="menu" >Input Data</div>
                </Link>
                <Link to="/laporan">
                    <div className="menu" >Laporan</div>
                </Link>
                <Link to="/info">
                    <div className="menu" >Info Account</div>
                </Link>
            </div>
        );
    }
}

export default Nav;