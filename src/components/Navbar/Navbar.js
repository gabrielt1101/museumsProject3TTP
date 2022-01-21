import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
      <div className="navbar">
        <nav>
            <ul className="nav-links">
                <li className="nav-link"><Link to="/home">
                    Home
                </Link></li>
                <li className="nav-link"><Link to="/about">
                    About
                </Link></li>
                <li className="nav-link"><Link to="/tourList">
                    Tour List
                </Link></li>
          </ul>
      </nav>
      </div>
  );
};

export default Navbar;