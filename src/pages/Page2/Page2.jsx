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

import './Page2.css';
import InfoCard from '../../components/Info/InfoCard';



function Page2() {
    return (
        <>
            <div className="grid-first">
                <div className="column-first">
                    <div className="textcomponent">
                        <TextComponent
                            title="Advertise"
                            subtitle="Why Advertise With Us?"
                            text="Supercharge your brand, captivate new users, and unleash your product's global potential! With millions of engaged users, spanning thousands of apps and websites, you can seamlessly acquire new users for unrivaled growth and exposure."
                            textAlign="left" />
                        <Button text={"GET STARTED"} onClick={() => console.log("Button Clicked")} />
                    </div>
                </div>
                <div className="column-first">
                    <img src={hornSvg} alt="Horn" className="horn-image" />
                </div>
            </div>
            <div className="services">
                <TextComponent
                    title="Specific Advantages"
                    subtitle="Our results speak for themselves"
                    textAlign='center' />
            </div>
            <div className="grid3">
                <div className="column3">
                    <InfoCard
                        imageSrc={trafficSvg}
                        title={"Direct Traffic"}
                        subtitle={"& Loyal Users"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
                <div className="column3">
                    <InfoCard
                        imageSrc={expertiseSvg}
                        title={"Expertise"}
                        subtitle={"& Responsivity"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
                <div className="column3">
                    <InfoCard
                        imageSrc={advancedSvg}
                        title={"Advanced"}
                        subtitle={"Anti-Fraud Tools"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
            </div>
            <div className="grid-first" >
                <div className="column-first">
                    <div className="textcomponent">
                        <TextComponent
                            title="Rewarded Ads?"
                            subtitle="Forced to Watch the Wrong Ads at the Wrong Time"
                            text="With rewarded ads users choose when and how to engage, creating a seamless experience. Capture their undivided attention and build brand loyalty. Say goodbye to interruptions, embrace rewarded ads, and elevate your advertising strategy!"
                            textAlign="left" />
                    </div>
                </div>
                <div className="column-first">
                    <img src={computerSvg} alt="Horn" className="horn-image" />
                </div>
            </div>
            <div className="services">
                <TextComponent
                    title="Traffic types"
                    subtitle="Our results speak for themselves"
                    textAlign='center' />
            </div>
            <div className="grid4">
                <div className="column4">
                    <InfoCard
                        imageSrc={cpiSvg}
                        title={"CPI"}
                        subtitle={"Cost per Install"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
                <div className="column4">
                    <InfoCard
                        imageSrc={cpeSvg}
                        title={"CPE"}
                        subtitle={"Cost per engagement"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
                <div className="column4">
                    <InfoCard
                        imageSrc={cpcSvg}
                        title={"CPC"}
                        subtitle={"Cost per click"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
                <div className="column4">
                    <InfoCard
                        imageSrc={cpaSvg}
                        title={"CPA"}
                        subtitle={"Cost per action"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
            </div>
            <div className="grid-first">
                <div className="column-first">
                    <img src={panelSvg} alt="Horn" className="horn-image" />
                </div>
                <div className="column-first">
                    <div className="textcomponent-right">
                        <TextComponent
                            title="Advertise"
                            subtitle="Why Advertise With Us?"
                            text="Supercharge your brand, captivate new users, and unleash your product's global potential! With millions of engaged users, spanning thousands of apps and websites, you can seamlessly acquire new users for unrivaled growth and exposure."
                            textAlign="right" />
                        <Button text={"GET STARTED"} onClick={() => console.log("Button Clicked")} />
                    </div>
                </div>
            </div>
            <div className="services">
                <TextComponent
                    title="Contact us"
                    subtitle="Let us know what's on your mind"
                    textAlign='center' />
            </div>
        </>
    );
}

export default Page2;