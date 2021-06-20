import React from 'react';
import NlTabBar from '../../components/NlTabBar';
import TitleContainer from '../../components/TitleContainer';
import Styles from './styles.css';

const CourseDetail = () => {
    return (
        <div className="page-course-detail">
            <header>
                <NlTabBar allowMenu={true} />
            </header>
            <TitleContainer title="NL Mobile" />
            <div className="player-container">
                <div className="microsoft-365-player">
                  <iframe>

                  </iframe>
                </div>
                <div className="pl">
                  <div className="player-queue-header">
                    <h2>Playlist</h2>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail;
