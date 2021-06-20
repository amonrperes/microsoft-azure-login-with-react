import React from 'react';

import NlTabBar from '../../components/NlTabBar';

import Styles from './styles.css';

const Content = () => {
    return(
      <div className="page-content">
        <header>
          <NlTabBar userName="" />
        </header>
        <div className="page-content-body">
        <h1 className="page-content-title">Conteúdo</h1>
          <div>
            <h3>Desenvolvimento</h3>
            <h4>Neste segmento você poderá ver todos os<br/>cursos da área de desenvolvimento da NL</h4>
          </div>
        </div>
      </div>
    )
}

export default Content;
