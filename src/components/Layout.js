import React from 'react';
import logo from '../assets/logo/logo.svg'; // Assurez-vous que le chemin est correct
import meditationIcon from '../assets/nav-icons/meditation.svg';
import swimmingIcon from '../assets/nav-icons/swimming.svg';
import bikingIcon from '../assets/nav-icons/biking.svg';
import bodybuildingIcon from '../assets/nav-icons/bodybuilding.svg';
import '../styles/Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__header">
        <img className="layout__logo" src={logo} alt="SportSee icône" />
        <div className="layout__header__nav">
            <span>Accueil</span>
            <span>Profil</span>
            <span>Réglages</span>
            <span>Communauté</span>
        </div>
      </div>

      <div className="layout__content">
        <div className="layout__sidebar">
          <div className="layout__sidebar__nav">
            <img className="nav-icon" src={meditationIcon} alt="Méditation icône" />
            <img className="nav-icon" src={swimmingIcon} alt="Nage icône" />
            <img className="nav-icon" src={bikingIcon} alt="Vélo icône" />
            <img className="nav-icon" src={bodybuildingIcon} alt="Musculation icône" />
          </div>
          <span className="layout__sidebar__copyright">Copyright, SportSee 2020</span>
        </div>
        
        <div className="layout__main">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
