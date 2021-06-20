import React from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.css';

const propTypes = {
    title: PropTypes.string.isRequired,
}

const TitleContainer = ({title}) => {
    return (
        <div className="title-container">
            <h1 className="title">{title}</h1>
        </div>
    )
}

export default TitleContainer;