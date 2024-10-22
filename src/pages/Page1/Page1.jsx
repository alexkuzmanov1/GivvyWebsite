import AdvertiseCard from '../../components/AdvertiesCard/AdvertiseCard';
import Button from '../../components/Button/Button';
import TextComponent from '../../components/TextComponent/TextComponent';
import hornSvg from '/public/horn.svg'; // Import the SVG
import './Page1.css';
import InfoCard from '../../components/Info/InfoCard';
import globalSvg from '../../assets/global.svg'; // Import the SVG
import transperacySvg from '../../assets/transperacy.svg'; // Import the SVG
import techSvg from '../../assets/tech.svg'; // Import the SVG

function Page1() {
    return (
        <>
            <div className="grid-first">
                <div className="column-first">
                    <div className="textcomponent">
                        <TextComponent
                            title="Welcome"
                            subtitle="Global App, Game & Content Connections"
                            text="At Givvy, we believe in connecting people from around the world. We work with apps, games, and websites to enhance brands, provide monetization opportunities and expose users to great content."
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
                    title="Achievements"
                    subtitle="Our results speak for themselves"
                    textAlign='center' />
            </div>
            <div className="grid">
                <div className="column">
                    <div className="large-text">$1М+</div>
                    <div className="small-text">Publishers</div>
                </div>
                <div className="column">
                    <div className="large-text-alt">20М+</div>
                    <div className="small-text">Monthly Active Users</div>
                </div>
                <div className="column">
                    <div className="large-text-alt2">150K+</div>
                    <div className="small-text">Advertisers</div>
                </div>
            </div>
            <div className="services">
                <TextComponent
                    title="Our Services"
                    subtitle="Our results speak for themselves"
                    textAlign='center' />
            </div>
            <div className="grid2">
                <div className="column">
                    <img src={hornSvg} alt="Horn" className="horn-image" />
                </div>
                <div className="column2">
                    <AdvertiseCard
                        topText="Advertise"
                        blueText="Lorem Ipsum"
                        bottomText="Elevate your brand's impact, captivate a fresh audience, and unlock your product's worldwide possibilities."
                    />
                    <AdvertiseCard
                        topText="Monetize"
                        blueText="Lorem Ipsum"
                        bottomText="Elevate your brand's impact, captivate a fresh audience, and unlock your product's worldwide possibilities."
                    />
                </div>
            </div>
            <div className="services">
                <TextComponent
                    title="Why Us"
                    subtitle="Our results speak for themselves"
                    textAlign='center' />
            </div>
            <div className="grid3">
                <div className="column3">
                    <InfoCard
                        imageSrc={globalSvg}
                        title={"Global"}
                        subtitle={"& Direct Traffic"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
                <div className="column3">
                    <InfoCard
                        imageSrc={transperacySvg}
                        title={"Transparency"}
                        subtitle={"& Responsivity"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
                <div className="column3">
                    <InfoCard
                        imageSrc={techSvg}
                        title={"In-house Technological"}
                        subtitle={"Solutions"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
            </div>
            <div className="services">
                <TextComponent
                    title={"Why Us"}
                    subtitle={"Our results speak for themselves"}
                    textAlign='center'
                />
            </div>
        </>
    );
}

export default Page1;