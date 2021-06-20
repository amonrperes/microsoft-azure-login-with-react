import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import NlTabBarLogo from '../../assets/nltabbarlogo.png';
import Logout from '../../assets/logout.png';
import Style from './styles.css';

import Husky from '../../assets/husky.png';

const propTypes = {
  allowMenu: PropTypes.bool.isRequired,
}

const NlTabBar = ({allowMenu}) => {
  const history = useHistory();

  const HandleLogout = () => {
    localStorage.clear();
    history.push("/");
  }
  return (
    <div className="nl-tab-container">
      <div className="nl-logo-container">
        <img src={NlTabBarLogo} alt="NlTabBarLogo" className="nl-tab-bar-logo"/>
      </div>
      {allowMenu === true &&(<div className="tab-bar-title">
        <Link to="/home" style={{textDecoration: 'none', marginLeft: 20}}>
            <h1 className="nl-tab-bar-title-h1">Home</h1>
        </Link>
        <Link to="/me/profile" style={{textDecoration: 'none', marginLeft: 20}}>
            <h1 className="nl-tab-bar-title-h1">Perfil</h1>
        </Link>
        <Link to="/content/courses" style={{textDecoration: 'none', marginLeft: 20}}>
            <h1 className="nl-tab-bar-title-h1">Treinamentos</h1>
        </Link>
      </div>)}
      {allowMenu === true &&(<div className="user-tools-container">
        <button className="profile-modal" onClick={HandleLogout}/>
      </div>)}
    </div>
  )
}

NlTabBar.propTypes = propTypes;
export default NlTabBar;
