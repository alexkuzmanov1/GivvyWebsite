import { useState } from 'react';
import styles from './Expandable.module.css';
import pinkcrossSvg from '../../assets/pinkcross.svg';
import minuscrossSvg from '../../assets/pinkminus.svg';

const ExpandableComponent = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${styles['expandable-container']} ${isExpanded ? styles['expanded'] : ''}`} onClick={handleToggle}>
            <img src={isExpanded ? minuscrossSvg : pinkcrossSvg} alt="Cross" className={styles['cross']} />
            <div className={styles['text-container']}>
                Your Text Here
            </div>
            {isExpanded && (
                <div className={styles['expanded-content']}>
                    Expanded content goes here.
                </div>
            )}
        </div>
    );
};

export default ExpandableComponent;