import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import TopicBadge from './TopicBadge';

import Styles from './styles.css';

import JSLogo from '../../assets/js-file 1.png';
import JavaLogo from '../../assets/java 1.png';
import ReactLogo from '../../assets/physics 2.png';
import PythonLogo from '../../assets/python 2.png';
import PlLogo from '../../assets/database 2.png';

const propTypes = {
  courseTitle: PropTypes.string.isRequired,
  courseDescription: PropTypes.string.isRequired,
  topicsArray: PropTypes.array.isRequired,
};

const CoursesList = ({courseTitle, courseDescription, topicsArray}) => {
  const [topics, setTopics] = useState([]);

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
    <Link to="/course-detail" style={{ textDecoration: 'none' }}>
      <div className="container">
        <div className="course-title">
          <h1 className="course-title-h1">{courseTitle}</h1>
          {topicsArray.map(topic => (
          <div className="topics-container">
            <img src={LogoSelector(topic)} alt="topic-icon" id="topic-icon"/>
            <h3 className="topic">{topic}</h3>
          </div>
          ))}
        </div>
        <div className="course-description">
          <h3 className="course-description-h2">{courseDescription}</h3>
        </div>
      </div>
    </Link>

  )
}

CoursesList.propTypes = propTypes;
export default CoursesList;
