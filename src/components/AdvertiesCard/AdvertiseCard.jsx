import PropTypes from 'prop-types';
import styles from './AdvertiseCard.module.css';
import Button from '../Button/Button';
import advertiseBg from '../../assets/advertise.svg'; // Import the SVG background

const AdvertiseCard = ({ topText, blueText, bottomText }) => {
  return (
    <div className={styles['advertise-card']} style={{ backgroundImage: `url(${advertiseBg})` }}>
      <div className={styles['top-text']}>{topText}</div>
      <div className={styles['blue-text']}>{blueText}</div>
      <div className={styles['bottom-text']}>{bottomText}</div>
      <Button text={"ADVERTISE"} onClick={() => console.log("Button Clicked")} />
    </div>
  );

};

AdvertiseCard.propTypes = {
  topText: PropTypes.string.isRequired,
  blueText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
};

export default AdvertiseCard;