// GivvyWebsite/src/pages/Page4/Page4.jsx

import Button from '../../components/Button/Button';
import TextComponent from '../../components/TextComponent/TextComponent';
import handsSvg from '../../assets/hands.svg'; // Import the SVG    
import styles from './Publisher.module.css'

function Advertiser() {
    return (
        <>
            <div className={styles['grid-first']}>
                <div className={styles['column-first']}>
                    <div className={styles['textcomponent']}>
                        <TextComponent
                            title="Join us"
                            subtitle="Register and enjoy all the benefits our platform has to offer."
                            text="To get started please choose the best option that describes you."
                            textAlign="left" />
                        <div className={styles['grid']}>
                            <div className="child">
                                <Button text={"Publisher"} onClick={() => console.log("Button Clicked")} /></div>
                            <div className="child2">
                                <Button text={"Advertiser"}></Button></div>
                        </div>
                    </div>
                </div>
                <div className={styles['column-first']}>
                    <img src={handsSvg} alt="Horn" className={styles['horn-image']} />
                </div>
            </div>
        </>
    );
}

export default Advertiser;