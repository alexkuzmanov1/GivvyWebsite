import './TextComponent.css';

const TextComponent = ({ title, subtitle, text, textAlign = "left" }) => {
    return (
        <div className="container2" style={{ textAlign }}>
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{subtitle}</h2>
            <p className="text">{text}</p>
        </div>
    );
};

export default TextComponent;