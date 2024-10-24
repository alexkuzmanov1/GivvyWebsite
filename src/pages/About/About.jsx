import { Button } from 'react-scroll';
import TextComponent from '../../components/TextComponent/TextComponent';
import styles from './About.module.css';
import questionSvg from '../../assets/question.svg';

function About() {
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
        </>
    );
}

export default About;