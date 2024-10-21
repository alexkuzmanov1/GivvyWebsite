import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <img src="/givvy-white.jpg" alt="Givvy Logo" className="footer-image" />
                <p className="footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam laudantium ullam eveniet quibusdam earum autem, quas laborum quaerat quis.</p>
                <button className="footer-button">Store</button>
            </div>
            <div className="footer-column">
                <h3 className="footer-title">Menu</h3>
                <a>Home</a>
                <a>Stats</a>
                <a>Bestsellers</a>
                <a>Apps</a>
                <a>Our Values</a>
            </div>
            <div className="footer-column">
                <h3 className="footer-title">Information</h3>
                <a>Terms of Service</a>
                <a>Privacy Policy</a>
                <a>Insertion Order Terms</a>
            </div>
            <p className="footer-copyright">Copyright 2024 © Givvy</p>
        </footer>
    );
}

export default Footer;