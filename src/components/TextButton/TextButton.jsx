import PropTypes from 'prop-types';
import TextComponent from '../TextComponent/TextComponent';
import Button from '../Button/Button';
import styles from './TextButton.module.scss';

const TextButton = ({ textComponentProps, buttonProps1, buttonProps2 }) => {
    const { textAlign } = textComponentProps;

    return (
        <div className={styles['text-button-wrapper']}>
            <div className={`${styles['text-button-container']} ${textAlign}`}>
                <TextComponent {...textComponentProps} />
                <div className={`${styles['button-group']} ${textAlign}`}>
                    {buttonProps1 && <Button {...buttonProps1} />}
                    {buttonProps2 && <Button {...buttonProps2} />}
                </div>
            </div>
        </div>
    );
};

TextButton.propTypes = {
    textComponentProps: PropTypes.object.isRequired,
    buttonProps1: PropTypes.object,
    buttonProps2: PropTypes.object,
};

export default TextButton;