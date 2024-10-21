import "./InfoCard.css";
import pinkdot from "../../assets/pinkdot.svg";

const InfoCard = ({ imageSrc, title, subtitle, description }) => {
    return (
        <div className="card-container">
            <img src={pinkdot} alt="pink dot" className="pinkdot top" />
            <div className="card-icon">
                <img src={imageSrc} alt="icon" className="card-image" />
            </div>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <h3 className="card-subtitle">{subtitle}</h3>
                <p className="card-description">{description}</p>
            </div>
            <img src={pinkdot} alt="pink dot" className="pinkdot bottom" />
        </div>
    );
}

export default InfoCard;