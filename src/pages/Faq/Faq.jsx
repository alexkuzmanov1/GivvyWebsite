import styles from './Faq.module.css'
import questionSvg from '../../assets/question.svg'
import TextComponent from '../../components/TextComponent/TextComponent'
import ExpandableComponent from '../../components/Expandable/Expandable';
import { useState } from 'react';

const Faq = () => {
    const [active, setActive] = useState(null);

    const handleMouseEnter = (index) => {
        setActive(index);
    };

    const handleMouseLeave = () => {
        setActive(null);
    };

    const handleClick = (index) => {
        setActive(index);
    };

    const menuItems = ['Advertise', 'Monetize', 'Missing your reward?'];


    return (
        <>
            <div className={styles['grid-first']}>
                <div className={styles['column-first']}>
                    <div className={styles['textcomponent']}>
                        <TextComponent
                            title="Advertise"
                            subtitle="Why Advertise With Us?"
                            text="Supercharge your brand, captivate new users, and unleash your product's global potential! With millions of engaged users, spanning thousands of apps and websites, you can seamlessly acquire new users for unrivaled growth and exposure."
                            textAlign="left" />
                        <div className={styles['grid']}>
                        </div>
                    </div>
                </div>
                <div className={styles['column-first']}>
                    <img src={questionSvg} alt="Horn" className={styles['horn-image']} />
                </div>
            </div>
            <div className={styles['text']}>
                <TextComponent
                    subtitle={"Advertise"}
                    textAlign='center'
                />
            </div>
            <div className={styles['menuContainer']}>
                {menuItems.map((item, index) => (
                    <span
                        key={index}
                        className={`${styles['menuItem']} ${active === index ? styles.active : ''}`}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {item}
                    </span>
                ))}
            </div>
            <ExpandableComponent />
        </>
    )
}

export default Faq