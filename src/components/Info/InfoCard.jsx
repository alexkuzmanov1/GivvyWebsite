import "./InfoCard.css";
import pinkdot from "../../assets/pinkdot.svg";

const InfoCard = ({ imageSrc, title, subtitle, description, className, imageClass, descriptionClass }) => {
    return (
        <div className={`card-container ${className}`}>
            <img src={pinkdot} alt="pink dot" className="pinkdot top" />
            <div className="card-icon">
                <img src={imageSrc} alt="icon" className={`card-image ${imageClass}`} />
            </div>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <h3 className="card-subtitle">{subtitle}</h3>
                <p className={`card-description ${descriptionClass}`}>{description}</p>
            </div>
            <img src={pinkdot} alt="pink dot" className="pinkdot bottom" />
        </div>
    );
}

export default InfoCard;