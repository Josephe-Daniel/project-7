import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="nav_container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <nav>
            <ul>
              <NavLink
                to="/"
                // If the link is active, className = nav-active, otherwise className is empty
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                end
              >
                <li>Accueil</li>
              </NavLink>
              <NavLink
                to="/about"
                // If the link is active, className = nav-active, otherwise className is empty
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li>A Propos</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
