import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";
import givvyLogo from "/givvylogo.png"; // Import the logo
import loginButton from "../../assets/loginbutton.svg"; // Import the login button SVG

const NavBar = () => {
    const [active, setActive] = useState("HOME");

    const navItems = [
        { name: "HOME", path: "/" },
        { name: "ADVERTISE", path: "/advertise" },
        { name: "MONETIZE", path: "/monetize" },
        { name: "FAQ", path: "/faq" },
        { name: "ABOUT", path: "/about" }
    ];

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={givvyLogo} alt="Givvy Logo" className="logo" />
            </div>
            <div className="vertical-line"></div>
            <ul className="nav-items">
                {navItems.map((item) => (
                    <li
                        key={item.name}
                        className={`nav-item ${active === item.name ? "active" : ""}`}
                        onClick={() => setActive(item.name)}
                    >
                        <Link to={item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            <div className="loginbutton-container">
                <span className="login-text">LOG IN</span>
                <img src={loginButton} alt="Log In" className="login-button" />
            </div>
        </nav>
    );
};

export default NavBar;