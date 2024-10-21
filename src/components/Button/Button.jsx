import React from 'react';
import './Button.css';
import buttonBorder from '../../assets/buttonBorder.svg'; // Import the SVG file

const Button = ({ text, onClick }) => {
    return (
        <div className="button-container" onClick={onClick}>
            <img src={buttonBorder} alt="Button Border" className="svg-border" />
            <div className="inner-button">
                <span className="button-text">{text}</span>
            </div>
        </div>
    );
};

export default Button;