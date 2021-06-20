import React, {useState} from 'react';

import NlTabBar from '../../components/NlTabBar';
import CourseButton from '../../components/CourseButton/index';
import TopicBox from '../../components/TopicBox';
import CoursesList from '../../components/CoursesList';
// import Button from '../../components/Button';
import TitleContainer from '../../components/TitleContainer';

import Style from './style.css';

const languages = ['Javascript', 'Java', 'React Native', 'PlSql', 'Python'];

const Courses = () =>{
  const [data, setData] = useState([
    {
      courseTitle: 'NL Mobile',
      description: 'O treinamento engloba os princípios do React Native e também a maneira na qual é usado no NL Mobile',
      topics: [
        'Javascript',
        'React Native',
        'Java',
        'PlSql',
        'Python'
      ],
    },
    {
      courseTitle: 'Autorização',
      description: 'O treinamento engloba o funcionamento do módulo de autorização da NL e como se desenvolvem novas features',
      topics: [
        'Java',
        'PlSql'
      ],
    },
    {
      courseTitle: 'Python Básico',
      description: 'Treinamento básico de Python para desenvolvedores Cake',
      topics: [
        'Python',
      ],
    },
    {
      courseTitle: 'NL Web',
      description: 'Treinamento para novos colaboradores',
      topics: [
        'Java',
        'PlSql'
      ],
    },
  ]);

  return(
    <div>
      <header>
        <NlTabBar
          allowMenu={true}
        />
      </header>
      <div className="body-container">
        <div className="course-list-container">
          {data.map(element => (
          <CoursesList
            courseTitle={element.courseTitle}
            courseDescription={element.description}
            topicsArray={element.topics}
          />
          ))}
        </div>
        <TopicBox
          topics={languages}
          topicBoxTitle="Linguagens"
          />
      </div>
    </div>
  )
}
export default Courses;
