import React, {useState} from 'react';
// import PropTypes from 'prop-types';

import Styles from './styles.css';

import JSLogo from '../../assets/js-file 1.png';
import JavaLogo from '../../assets/java 1.png';
import ReactLogo from '../../assets/physics 2.png';
import PythonLogo from '../../assets/python 2.png';
import PlLogo from '../../assets/database 2.png';

// const propTypes = {
//   topics: PropTypes.string.isRequired,
// }

const TopicBox = ({topics, topicBoxTitle}) => {

  const LogoSelector = (topic) => {
    switch(topic) {
      case 'Javascript':
        return JSLogo;
        break;
      case 'Java':
        return JavaLogo;
        break;
      case 'Python':
        return PythonLogo;
        break;
      case 'React':
        return ReactLogo;
        break;
      case 'React Native':
        return ReactLogo;
        break;
      case 'PlSql':
        return PlLogo;
        break;
      default:
        break;
    }
  }

  return(
    <div className='topic-box'>
      <h1 className='topic-box-title'>{topicBoxTitle}</h1>
      {topics.map(topic => (
        <div className="topics-container">
          {/* <div id="topic-badge"/> */}
          <img src={LogoSelector(topic)} alt="topic-icon" id="topic-icon"/>
          <h3 id="languages-text">{topic}</h3><br></br>
        </div>
      ))}
    </div>
  )
}

// TopicBox.propTypes = propTypes;
export default TopicBox;