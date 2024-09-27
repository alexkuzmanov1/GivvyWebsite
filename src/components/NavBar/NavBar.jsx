// GivvyWebsite/src/components/NavBar/NavBar.jsx
import React, { useState } from "react";
import "./NavBar.css";
import givvyLogo from "../../../public/givvylogo.png"; // Import the logo

const NavBar = () => {
    const [active, setActive] = useState("HOME");

    const navItems = ["HOME", "STATS", "APPS", "OUR VALUES"];

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={givvyLogo} alt="Givvy Logo" className="logo" />
            </div>
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
        </nav>
    );
};

export default NavBar;