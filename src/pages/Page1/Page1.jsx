
import Button from '../../components/Button/Button';
import TextComponent from '../../components/TextComponent/TextComponent';

import './Page1.css';

function Page1() {
    return (
        <>
            <TextComponent
                title="Welcome"
                subtitle="Global App, Game & Content Connections"
                text="At Givvy, we believe in connecting people from around the world. We work with apps, games, and websites to enhance brands, provide monetization opportunities and expose users to great content."
                textAlign="left" />

            <Button text={"GET STARTED"} onClick={() => console.log("Button Clicked")} />
        </>
    );
}

export default Page1;