import React from "react";
import logooo from "../../logooo.svg";
import "./navbar.scss"

import Home from "../Home/home"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logooo} alt="city tours company" />
            <ul className="nav-links">
                <li>
                    <a href="/home" className="nav-link">
                        home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                        about
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link active">
                        tours
                    </a>
                </li>
            </ul>
        </nav>
    );
}