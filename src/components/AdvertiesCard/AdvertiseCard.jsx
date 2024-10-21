import React from 'react';
import PropTypes from 'prop-types';
import './AdvertiseCard.css';
import Button from '../Button/Button';
import advertiseBg from '../../assets/advertise.svg'; // Import the SVG background

const AdvertiseCard = ({ topText, blueText, bottomText }) => {
  return (
    <div className="advertise-card" style={{ backgroundImage: `url(${advertiseBg})` }}>
      <div className="top-text">{topText}</div>
      <div className="blue-text">{blueText}</div>
      <div className="bottom-text">{bottomText}</div>
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