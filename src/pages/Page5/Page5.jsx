// GivvyWebsite/src/pages/Page5/Page5.jsx

import AdvertiseCard from '../../components/AdvertiesCard/AdvertiseCard';
import Input from '../../components/Input/Input';
import './Page5.css';

function Page5() {
    return (
        <div className="Page5">
            <Input spanText="Company:" placeholder={"Company Name"} />
            <AdvertiseCard
                topText="Advertise"
                blueText="Lorem Ipsum"
                bottomText="Elevate your brand's impact, captivate a fresh audience, and unlock your product's worldwide possibilities." />
        </div>
    );
}

export default Page5;