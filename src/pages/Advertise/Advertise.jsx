import Button from '../../components/Button/Button';
import TextComponent from '../../components/TextComponent/TextComponent';
import hornSvg from '../../assets/horn.svg'; // Import the SVG
import trafficSvg from '../../assets/traffic.svg'; // Import the SVG
import expertiseSvg from '../../assets/expertise.svg'; // Import the SVG
import advancedSvg from '../../assets/advanced.svg'; // Import the SVG
import computerSvg from '../../assets/computer.svg'; // Import the SVG
import cpiSvg from '../../assets/cpi.svg'; // Import the SVG
import cpeSvg from '../../assets/cpe.svg'; // Import the SVG
import cpcSvg from '../../assets/cpc.svg'; // Import the SVG
import cpaSvg from '../../assets/cpa.svg'; // Import the SVG
import panelSvg from '../../../public/horn.svg'
import styles from './Advertise.module.css'
import InfoCard from '../../components/Info/InfoCard';
import Input from '../../components/Input/Input';



function Advertise() {
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
                            <Button text={"GET STARTED"} onClick={() => console.log("Button Clicked")} />
                            <Button text={"Contact Us"} onClick={() => console.log("Button Clicked")} />
                        </div>
                    </div>
                </div>
                <div className={styles['column-first']}>
                    <img src={hornSvg} alt="Horn" className={styles['horn-image']} />
                </div>
            </div>
            <div className={styles['services']}>
                <TextComponent
                    title="Specific Advantages"
                    subtitle="Our results speak for themselves"
                    textAlign='center' />
            </div>
            <div className={styles['grid3']}>
                <div className={styles['column3']}>
                    <InfoCard
                        imageSrc={trafficSvg}
                        title={"Direct Traffic"}
                        subtitle={"& Loyal Users"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
                <div className={styles['column3']}>
                    <InfoCard
                        imageSrc={expertiseSvg}
                        title={"Expertise"}
                        subtitle={"& Responsivity"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
                <div className={styles['column3']}>
                    <InfoCard
                        imageSrc={advancedSvg}
                        title={"Advanced"}
                        subtitle={"Anti-Fraud Tools"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
            </div>
            <div className={styles['grid-first']} >
                <div className={styles['column-first']}>
                    <div className={styles['textcomponent']}>
                        <TextComponent
                            title="Rewarded Ads?"
                            subtitle="Forced to Watch the Wrong Ads at the Wrong Time"
                            text="With rewarded ads users choose when and how to engage, creating a seamless experience. Capture their undivided attention and build brand loyalty. Say goodbye to interruptions, embrace rewarded ads, and elevate your advertising strategy!"
                            textAlign="left" />
                    </div>
                </div>
                <div className={styles['column-first']}>
                    <img src={computerSvg} alt="Horn" className={styles['horn-image']} />
                </div>
            </div>
            <div className={styles['services']}>
                <TextComponent
                    title="Traffic types"
                    subtitle="Our results speak for themselves"
                    textAlign='center' />
            </div>
            <div className={styles['grid4']}>
                <div className={styles['column4']}>
                    <InfoCard
                        imageSrc={cpiSvg}
                        title={"CPI"}
                        subtitle={"Cost per Install"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
                <div className={styles['column4']}>
                    <InfoCard
                        imageSrc={cpeSvg}
                        title={"CPE"}
                        subtitle={"Cost per engagement"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
                <div className={styles['column4']}>
                    <InfoCard
                        imageSrc={cpcSvg}
                        title={"CPC"}
                        subtitle={"Cost per click"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
                <div className={styles['column4']}>
                    <InfoCard
                        imageSrc={cpaSvg}
                        title={"CPA"}
                        subtitle={"Cost per action"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
            </div>
            <div className={styles['grid-first']}>
                <div className={styles['column-first']}>
                    <img src={panelSvg} alt="Horn" className="horn-image" />
                </div>
                <div className={styles['column-first']}>
                    <div className={styles['textcomponent-right']}>
                        <TextComponent
                            title="Advertise"
                            subtitle="Why Advertise With Us?"
                            text="Supercharge your brand, captivate new users, and unleash your product's global potential! With millions of engaged users, spanning thousands of apps and websites, you can seamlessly acquire new users for unrivaled growth and exposure."
                            textAlign="right" />
                        <Button text={"GET STARTED"} onClick={() => console.log("Button Clicked")} />
                    </div>
                </div>
            </div>
            <div className={styles['services']}>
                <TextComponent
                    title="Contact us"
                    subtitle="Let us know what's on your mind"
                    textAlign='center' />
            </div>
            <div className={styles['form']}>
                <div className={styles['input-grid-1']}>
                    <div className={styles['input-1']} >
                        <Input spanText='Your Name' placeholder={"Name"} />
                    </div>
                    <div className={styles['input-2']} >
                        <Input spanText='Your are' placeholder={"I'm an Advertiser"} />
                    </div>
                    <div className={styles['input-3']}>
                        <Input spanText='Your E-mail :' placeholder={"E-mail"} />
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

export default Advertise;