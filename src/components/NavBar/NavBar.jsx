import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css";
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
        <nav className={styles['navbar']}>
            <div className={styles['logo-container']}>
                <img src={givvyLogo} alt="Givvy Logo" className={styles['logo']} />
            </div>
            <div className={styles['vertical-line']}></div>
            <ul className={styles['nav-items']}>
                {navItems.map((item) => (
                    <li
                        key={item.name}
                        className={`${styles['nav-item']} ${active === item.name ? "active" : ""}`}
                        onClick={() => setActive(item.name)}
                    >
                        <Link to={item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            <div className={styles['loginbutton-container']}>
                <span className={styles['login-text']}>LOG IN</span>
                <img src={loginButton} alt="Log In" className={styles['login-button']} />
            </div>
        </nav>
    );
};

export default NavBar;