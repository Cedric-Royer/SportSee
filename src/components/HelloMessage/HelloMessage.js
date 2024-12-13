import React from "react";
import "./HelloMessage.scss";

/**
 * Composant qui affiche un message de bienvenue avec le prénom de l'utilisateur.
 *
 * @composant
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.firstName - Le prénom de l'utilisateur à afficher dans le message de bienvenue.
 * @returns {JSX.Element} Un message de bienvenue personnalisé.
 */
const HelloMessage = ({ firstName }) => (
  <p className="hello-message">
    <span>Bonjour</span>
    <span className="hello-message__name">{firstName}</span>
  </p>
);

HelloMessage.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default HelloMessage;
