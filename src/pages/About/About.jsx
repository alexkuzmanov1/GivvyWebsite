import TextComponent from '../../components/TextComponent/TextComponent';
import styles from './About.module.css';
import questionSvg from '../../assets/question.svg';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

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
            <div className={styles['form']}>
                <div className={styles['form-text']}>
                    <TextComponent
                        title="Register"
                        subtitle="Already registered?"
                        textAlign='center' />
                    <div className={styles['button']} >
                        <Button text={"Login"} />
                    </div>
                </div>
                <div className={styles['input-grid-1']}>
                    <div className={styles['input-1']} >
                        <Input spanText='Company :' placeholder={"Company Name"} />
                    </div>
                    <div className={styles['input-2']} >
                        <Input spanText='Contact person' placeholder={"John Smith"} />
                    </div>
                    <div className={styles['input-3']}>
                        <Input spanText='Your E-mail :' placeholder={"E-mail"} />
                    </div>
                    <div className={styles['input-4']}>
                        <Input spanText='Your Country :' placeholder={"Select Your Country"} />
                    </div>
                </div>
                <div className={styles['input-wrapper']}>
                    <span className={styles['title']}>Your Message</span>
                    <span className={styles['smalltext']} >Lets us know the details of your case.</span>
                    <div className={styles['image-container']}>
                        <textarea type="text" placeholder='Type Here' className={styles['input']} />
                    </div>
                </div>
                <Button text={"Submit"} />
            </div>

        </>
    );
}

export default About;