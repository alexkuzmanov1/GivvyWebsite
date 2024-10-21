// GivvyWebsite/src/pages/Page2/Page2.jsx

import InfoCard from '../../components/Info/InfoCard';
import './Page2.css';
import imageSrc from '../../assets/image.svg';


function Page2() {
    return (
        <div className="Page2">
            <h1>Welcome to Page 2</h1>
            <InfoCard
                imageSrc={imageSrc}
                title={"Global"}
                subtitle={"Subtitle"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            />
        </div>
    );
}

export default Page2;