import styles from './Button.module.css';
import buttonBorder from '../../assets/buttonBorder.svg';

const Button = ({ text, onClick }) => {
    return (
        <div className={styles['button-container']} onClick={onClick}>
            <img src={buttonBorder} alt="Button Border" className={styles['svg-border']} />
            <div className={styles['inner-button']}>
                <span className={styles['button-text']}>{text}</span>
            </div>
        </div>
    );
};

export default Button;