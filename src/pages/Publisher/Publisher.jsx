// GivvyWebsite/src/pages/Page4/Page4.jsx

import Button from '../../components/Button/Button';
import TextComponent from '../../components/TextComponent/TextComponent';
import handsSvg from '../../assets/hands.svg'; // Import the SVG    
import formSvg from '../../assets/form.svg'; // Import the SVG
import styles from './Publisher.module.css'
import Input from '../../components/Input/Input';

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
                <div className='smalltext'>
                    <h1>Communication Platform Account:</h1>
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
};

export default Advertiser;