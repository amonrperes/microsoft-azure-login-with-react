import React, { useState } from 'react';

import NlTabBar from '../../components/NlTabBar';

import Styles from './styles.css'

import PlayButton from '../../assets/play-button.png'

const Home = () => {
  const [userName, setUserName] = useState('Amon');
  const [classTitle, SetClassTitle] = useState('Abertura');
  return(
    <div className="home-page">
      <header>
        <NlTabBar allowMenu={true} />
      </header>
      <div className="home-content">
        <div className="home-page-welcome">
          <h1>Olá, {userName}</h1>
          <div>
            <h3>Seja bem vindo de volta.</h3>
            <h3>Você pode seguir assistindo sua aula de onde parou.</h3>
          </div>
        </div>
        <div className="home-page-last-class">
          <div className="class-title">
            <h2>{classTitle}</h2>
            <h4>Desenvolvimento / NL Mobile</h4>
          </div>
          <div className="go-to-class">
            <h4>CONTINUAR ASSISTINDO</h4>
            <img src={PlayButton} alt="play-button"/>
          </div>
        </div>
        <div className="profile-and-trainings">
          <div className="profile-container">
            <div className="profile-picture">

            </div>
            <div className="profile-button">

            </div>
          </div>
          <div className="training-container">

          </div>
        </div>
      </div>
    </div>


  )
}

export default Home;
