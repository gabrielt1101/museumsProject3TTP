import "./navbar.scss"
import React from "react";
import logooo from "../../logooo.svg";
import "./navbar.scss"
import  {BrowserRouter,Route,Routes} from "react-router-dom";
import { Link } from "react-router-dom";


import Home from "../Home/home"
import TourList from "../TourList/tours"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logooo} alt="city tours company" />
            <ul className="nav-links">
                <li>
                    <Link to="/" className="nav-link">
                        home
                    </Link>    
                </li>
                <li>
                    <Link to="/about" className="nav-link">
                        about
                    </Link>
                </li>
                <li>
                    <Link to="/tours" className="nav-link active">
                        tours
                    </Link>
                </li>
            </ul>
        </nav>
    );
}