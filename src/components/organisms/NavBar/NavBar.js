import React from 'react';
import {Link} from "react-router-dom";
import "../../../fonts/iceland-v8-latin-regular.woff"
import "../../../styles/theme.scss";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary-2">
            <div className="container">
                <div className="navbar-brand d-flex align-items-center">
                    <div>
                        <img src={require("../../../GDG-LogoIcon.png")}
                             width="50"
                             height="50"
                             className="d-block mr-2"
                             alt=""/>
                    </div>
                    <div>
                        <span className="h2 d-block mb-0">Game Dev Grit Podcast</span>
                    </div>
                </div>

                <div className="navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Episodes</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


export default NavBar;