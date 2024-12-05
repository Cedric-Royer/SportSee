import React from "react";
import PropTypes from "prop-types";

/**
 * Composant personnalisé pour afficher un tooltip dans un graphique d'activité quotidienne.
 *
 * @component
 * @alias DailyActivityChart/CustomTooltip
 * @param {Object} props - Les props du composant.
 * @param {boolean} props.active - Indique si le tooltip est actif.
 * @param {Array} props.payload - Les données à afficher dans le tooltip.
 * @param {Object} props.payload[].value - La valeur à afficher dans le tooltip.
 * @returns {JSX.Element|null} - Un élément tooltip affichant les valeurs ou `null` si le tooltip n'est pas actif.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip__daily-activity">
        <span>{`${payload[0].value}Kg`}</span>
        <span>{`${payload[1].value}Kcal`}</span>
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
