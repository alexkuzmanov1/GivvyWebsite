import { useState } from 'react';
import './Expandable.css';
import expandableBg from '../../assets/expandable.svg'; // Import the SVG background

const ExpandableComponent = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActiveState = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={`container ${isActive ? 'active' : 'inactive'}`}
            onClick={toggleActiveState}
            style={{ backgroundImage: !isActive ? `url(${expandableBg})` : 'none' }}
        >
            {/* Title that remains visible in both states */}
            <div className="inactive-text">
                How Can I Advertise My Product Or Service With You?
            </div>

            {/* Content that only shows when the component is active */}
            {isActive && (
                <div className="active-content">
                    What Types Of Offers Can I Promote With You?
                </div>
            )}
        </div>
    );
};

export default ExpandableComponent;