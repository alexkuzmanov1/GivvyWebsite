import './Input.css'; // Importing the CSS
import inputBg from '../../assets/input.svg'; // Import the SVG background

const Input = ({ spanText, placeholder }) => {
    return (
        <div className="input-wrapper">
            <span className="custom-span">{spanText}</span>
            <input
                type="text"
                className="custom-input"
                placeholder={placeholder}
                style={{ backgroundImage: `url(${inputBg})` }}
            />
        </div>
    );
};

export default Input;