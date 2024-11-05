import inputSvg from '../../assets/input.svg'; // Import the SVG background
import styles from './Input.module.css'; // Import the CSS Module

const Input = ({ spanText, placeholder }) => {
    return (
        <div className={styles['input-wrapper']}>
            <span className={styles['title']}>{spanText}</span>
            <div className={styles['image-container']}>
                <input type="text" className={styles['input']} placeholder={placeholder} />
            </div>
        </div>
    );
};

export default Input;