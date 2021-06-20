import React from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

const Button = ({title, onPress}) => {
  return(
    <>
    <button
    onClick={onPress}
    >
    {title}  
    </button>
    </>
  )
}

Button.propTypes = propTypes;
export default Button;