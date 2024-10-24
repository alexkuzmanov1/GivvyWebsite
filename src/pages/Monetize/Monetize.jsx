import TextComponent from '../../components/TextComponent/TextComponent'
import Button from '../../components/Button/Button'
import panelSvg from '../../../public/horn.svg'
import styles from './Monetize.module.css'
import InfoCard from '../../components/Info/InfoCard'
import lightweightSvg from '../../assets/lightweight.svg'
import nativeSvg from '../../assets/native.svg'
import howitworksSvg from '../../assets/howitworks.svg'
import Lottie from 'lottie-react'
import panelAnimation from '../../assets/Lottie/data.json'

const Monetize = () => {
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
                            <Button text={"Publisher"} onClick={() => console.log("Button Clicked")} />
                            <Button text={"Advertiser"}></Button>
                        </div>
                    </div>
                </div>
                <div className={styles['column-first']}>
                    <Lottie animationData={panelAnimation} loop={false} />
                </div>
            </div>
            <div className={styles['services']}>
                <TextComponent
                    title="Achievements"
                    subtitle="Our results speak for themselves"
                    textAlign='center' />
            </div>
            <div className={styles['grid3']}>
                <div className={styles['column3']}>
                    <InfoCard
                        className="info-card"
                        imageClass="info-card-image"
                        descriptionClass={"info-card-description"}
                        imageSrc={lightweightSvg}
                        title={"Lightweight"}
                        subtitle={"Lorem ipsum"}
                        description={"A lightweight and seamless monetization solution for apps and games, our SDK is perfect for publishers who want to implement an offerwall that won’t weigh your game or app down."}
                    />
                </div>
                <div className={styles['column3']}>
                    <InfoCard
                        className="info-card"
                        imageClass="info-card-image"
                        descriptionClass={"info-card-description"}
                        imageSrc={nativeSvg}
                        title={"Native in the App"}
                        subtitle={"& Responsivity"}
                        description={"One significant advantage of our SDK-integrated Offerwall is its native integration with your app or game, delivering an uninterrupted and cohesive user experience."}
                    />
                </div>
            </div>
            <div className={styles['services']}>
                <TextComponent
                    title="How It Works"
                    subtitle="Our results speak for themselves"
                    textAlign='center' />
            </div>
            <img src={howitworksSvg} alt="How it works" className={styles['howitworks-image']} />
        </>
    )
}

export default Monetize