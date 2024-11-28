import styles from './TextComponent.module.css';

const TextComponent = ({ title, subtitle, text, textAlign = "left" }) => {
    return (
        <div className={styles['container2']} style={{ textAlign }}>
            <h1 className={styles['title']}>{title}</h1>
            <h2 className={styles['subtitle']}>{subtitle}</h2>
            <p className={styles['text']}>{text}</p>
        </div>
    );
};

export default TextComponent;