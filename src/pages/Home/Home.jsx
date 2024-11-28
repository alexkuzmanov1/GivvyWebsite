import styles from './Home.module.css'
import AdvertiseCard from '../../components/AdvertiesCard/AdvertiseCard';
import Button from '../../components/Button/Button';
import TextComponent from '../../components/TextComponent/TextComponent';
import hornSvg from '/public/horn.svg';
import InfoCard from '../../components/Info/InfoCard';
import globalSvg from '../../assets/global.svg';
import transperacySvg from '../../assets/transperacy.svg';
import techSvg from '../../assets/tech.svg';
import meeSvg from '../../assets/mee.svg';
import prodegeSvg from '../../assets/prodege.svg';
import wetoonSvg from '../../assets/wetoon.svg';
import exmoxSvg from '../../assets/exmox.svg';
import gatemediaSvg from '../../assets/gatemedia.svg';
import tvtwoSvg from '../../assets/tvtwo.svg';
import timewallSvg from '../../assets/timewall.svg';
import studiosSvg from '../../assets/studios.svg';


function Home() {
    return (
        <>
            <div className={styles['grid-first']}>
                <div className={styles['column-first']}>
                    <div className={styles['textcomponent']}>
                        <TextComponent
                            title="Welcome"
                            subtitle="Global App, Game & Content Connections"
                            text="At Givvy, we believe in connecting people from around the world. We work with apps, games, and websites to enhance brands, provide monetization opportunities and expose users to great content."
                            textAlign="left" />
                        <div className={styles['grid']}>
                            <Button text={"GET STARTED"} onClick={() => console.log("Button Clicked")} />
                            <Button text={"Contact"}></Button>
                        </div>
                    </div>
                </div>
                <div className={styles['column-first']}>
                    <img src={hornSvg} alt="Horn" className={styles['horn-image']} />
                </div>
            </div>
            <div className={styles['services']}>
                <TextComponent
                    title="Achievements"
                    subtitle="Our results speak for themselves"
                    textAlign='center' />
            </div>
            <div className={styles['grid']}>
                <div className={styles['column']}>
                    <div className={styles['large-text']}>$1М+</div>
                    <div className={styles['small-text']}>Publishers</div>
                </div>
                <div className={styles['column']}>
                    <div className={styles['large-text-alt']}>20М+</div>
                    <div className={styles['small-text']}>Monthly Active Users</div>
                </div>
                <div className={styles['column']}>
                    <div className={styles['large-text-alt2']}>150K+</div>
                    <div className={styles['small-text']}>Advertisers</div>
                </div>
            </div>
            <div className={styles['services']}>
                <TextComponent
                    title="Our Services"
                    subtitle="Our results speak for themselves"
                    textAlign='center' />
            </div>
            <div className={styles['grid2']}>
                <div className={styles['column']}>
                    <img src={hornSvg} alt="Horn" className={styles['horn-image']} />
                </div>
                <div className={styles['column2']}>
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
            <div className={styles['services']}>
                <TextComponent
                    title="Why Us"
                    subtitle="Our results speak for themselves"
                    textAlign='center' />
            </div>
            <div className={styles['grid3']}>
                <div className={styles['column3']}>
                    <InfoCard
                        imageSrc={globalSvg}
                        title={"Global"}
                        subtitle={"& Direct Traffic"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
                <div className={styles['column3']}>
                    <InfoCard
                        imageSrc={transperacySvg}
                        title={"Transparency"}
                        subtitle={"& Responsivity"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
                <div className={styles['column3']}>
                    <InfoCard
                        imageSrc={techSvg}
                        title={"In-house Technological"}
                        subtitle={"Solutions"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                </div>
            </div>
            <div className={styles['services']}>
                <TextComponent
                    title={"Why Us"}
                    subtitle={"Our results speak for themselves"}
                    textAlign='center'
                />
            </div>
            <div className={styles['sponsors-grid']}>
                <div className={styles['child1']}>
                    <div className={styles['sponsors-background']}>
                        <div className={styles['mee-container']}>
                            <img src={meeSvg} alt="Mee" className={styles['mee-image']} />
                        </div>
                    </div>
                </div>
                <div className={styles['child2']}>
                    <div className={styles['sponsors-background']}>
                        <div className={styles['mee-container']}>
                            <img src={prodegeSvg} alt="Mee" className={styles['mee-image']} />
                        </div>
                    </div>
                </div>
                <div className={styles['child3']}>
                    <div className={styles['sponsors-background']}>
                        <div className={styles['mee-container']}>
                            <img src={wetoonSvg} alt="Mee" className={styles['mee-image']} />
                        </div>
                    </div>
                </div>
                <div className={styles['child4']}>
                    <div className={styles['sponsors-background']}>
                        <div className={styles['mee-container']}>
                            <img src={exmoxSvg} alt="Mee" className={styles['mee-image']} />
                        </div>
                    </div>
                </div>
                <div className={styles['child5']}>
                    <div className={styles['sponsors-background']}>
                        <div className={styles['mee-container']}>
                            <img src={gatemediaSvg} alt="Mee" className={styles['mee-image']} />
                        </div>
                    </div>
                </div>
                <div className={styles['child6']}>
                    <div className={styles['sponsors-background']}>
                        <div className={styles['mee-container']}>
                            <img src={tvtwoSvg} alt="Mee" className={styles['mee-image']} />
                        </div>
                    </div>
                </div>
                <div className={styles['child7']}>
                    <div className={styles['sponsors-background']}>
                        <div className={styles['mee-container']}>
                            <img src={timewallSvg} alt="Mee" className={styles['mee-image']} />
                        </div>
                    </div>
                </div>
                <div className={styles['child8']}>
                    <div className={styles['sponsors-background']}>
                        <div className={styles['mee-container']}>
                            <img src={studiosSvg} alt="Mee" className={styles['mee-image']} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;