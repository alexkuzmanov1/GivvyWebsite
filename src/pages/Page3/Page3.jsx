// GivvyWebsite/src/pages/Page3/Page3.jsx

import TextButton from '../../components/TextButton/TextButton';
import './Page3.css';

function Page3() {
    const textComponentProps = {
        title: "Welcome",
        subtitle: "Global App, Game & Content Connections",
        text: "At Givvy, we believe in connecting people from around the world. We work with apps, games, and websites to enhance brands, provide monetization opportunities and expose users to great content.",
        textAlign: "right"
    };

    const buttonProps1 = {
        text: "GET STARTED",
        onClick: () => console.log("Button 1 Clicked")
    };

    const buttonProps2 = {
        text: "LEARN MORE",
        onClick: () => console.log("Button 2 Clicked")
    };

    return (
        <div className="Page3">
            <TextButton
                textComponentProps={textComponentProps}
                buttonProps1={buttonProps1}
                buttonProps2={buttonProps2}
            />
        </div>
    );
}
export default Page3;