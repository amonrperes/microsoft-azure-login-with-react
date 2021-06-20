import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Style from './styles.css';

const CourseButton = ({image, course, route}) => {
  return (
    <Link style={{textDecoration: 'none', color:'#FC7422'}} to={route}>
      <div className="CourseButton">
        <img src={image} alt="CourseImg" className="CourseImg"/>
      </div>
      <h1 className="CourseTitle">{course}</h1>
    </Link>
  )
}

export default CourseButton;