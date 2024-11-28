import footerBackground1 from '../../assets/footerbackground1.svg';
import footerBackground2 from '../../assets/footerbackground2.svg';
import globeSvg from '../../assets/globe.svg';
import givvyWhiteSvg from '../../assets/givvywhite.svg'; // Import the Givvy White SVG
import Button from '../../components/Button/Button'; // Import the Button component
import styles from './Footer.module.css'; // Use CSS Modules

const Footer = () => {
    return (
        <div className={styles['footer-container']}>
            <img src={footerBackground1} alt="Footer Background 1" className={styles['footer-background-1']} />
            <img src={footerBackground2} alt="Footer Background 2" className={styles['footer-background-2']} />
            <img src={globeSvg} alt="Globe" className={styles['globe']} />
            <div className={styles['footer-grid']}>
                <div className={styles['column-1']}>
                    <img src={givvyWhiteSvg} alt="Givvy White" className={styles['givvy-white']} />
                    <p className={styles['footer-text']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
                    <div className={styles['footer-button']}>
                        <Button text="STORE" />
                    </div>
                </div>
                <div className={styles['nested-grid']}>
                    <div className={styles['column-2']}>
                        <h2 className={styles['menu-title']}>Menu</h2>
                        <div className={styles['menu-buttons']}>
                            <div className={styles['child']}>Home</div>
                            <div className={styles['child']}>Stats</div>
                            <div className={styles['child']}>Bestseller</div>
                            <div className={styles['child']}>Apps</div>
                            <div className={styles['child']}>Our Values</div>
                        </div>
                    </div>
                    <div className={styles['column-3']}>
                        <h2 className={styles['info-title']}>Information</h2>
                        <div className={styles['info-buttons']}>
                            <div className={styles['child']}>Terms of Service</div>
                            <div className={styles['child']}>Privacy Policy</div>
                            <div className={styles['child']}>Insertion Order Terms</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;