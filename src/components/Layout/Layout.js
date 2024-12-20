import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo/logo.svg'; 
import meditationIcon from '../../assets/nav-icons/meditation.svg';
import swimmingIcon from '../../assets/nav-icons/swimming.svg';
import bikingIcon from '../../assets/nav-icons/biking.svg';
import bodybuildingIcon from '../../assets/nav-icons/bodybuilding.svg';
import './Layout.scss';

/**
 * Composant de mise en page principale pour l'application.
 * Fournit une structure de navigation et un espace pour le contenu principal.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {ReactNode} props.children - Le contenu principal à afficher dans la section centrale.
 *
 * @returns {React.Element} Le rendu du composant Layout.
 */
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

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
