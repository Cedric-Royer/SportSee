import React from "react";
import PropTypes from "prop-types";

/**
 * Composant personnalisé pour afficher un tooltip dans un graphique.
 *
 * @component
 * @alias AverageSessionChart/CustomTooltip
 * @param {Object} props - Les props du composant.
 * @param {boolean} props.active - Indique si le tooltip est actif.
 * @param {Array} props.payload - Les données à afficher dans le tooltip.
 * @param {Object} props.payload[].value - La valeur à afficher dans le tooltip.
 * @returns {JSX.Element|null} - Un élément tooltip affichant la valeur ou `null` si le tooltip n'est pas actif.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <span className="tooltip__text">{`${payload[0].value}min`}</span>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ).isRequired,
};

export default CustomTooltip;
