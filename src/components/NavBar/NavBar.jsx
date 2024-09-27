// GivvyWebsite/src/components/NavBar/NavBar.jsx
import React, { useState } from "react";
import "./NavBar.css";
import givvyLogo from "/givvylogo.png"; // Import the logo

const NavBar = () => {
    const [active, setActive] = useState("HOME");

    const navItems = ["HOME", "STATS", "APPS", "OUR VALUES"];

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={givvyLogo} alt="Givvy Logo" className="logo" />
            </div>
            <div className="vertical-line"></div>
            <ul className="nav-items">
                {navItems.map((item) => (
                    <li
                        key={item}
                        className={`nav-item ${active === item ? "active" : ""}`}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <button className="earn-money-button">Earn Money</button>
        </nav>
    );
};

export default NavBar;