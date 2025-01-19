import React from "react";
import PropTypes from "prop-types";

/**
 * Composant personnalisé pour afficher une légende dans un graphique.
 *
 * @function
 * @alias DailyActivityChart/CustomLegend
 * @param {Object} props - Les props du composant.
 * @param {Array} props.payload - Les données à afficher dans la légende.
 * @param {Object} props.payload[].color - La couleur associée à l'élément de la légende.
 * @param {string} props.payload[].value - La valeur à afficher dans la légende.
 * @returns {JSX.Element} - Un élément `<ul>` contenant des éléments de légende.
 */
const CustomLegend = (props) => {
  const { payload } = props;

  return (
    <ul style={{ 
        listStyleType: 'none', 
        padding: 0, 
        margin: '24px 10px 40px 0', 
        display: 'flex',
        justifyContent: 'flex-end', 
        gap: '10px',
      }}>
      {payload.map((entry, index) => (
        <li 
          key={`item-${index}`} 
          style={{ 
            color: '#74798C',
            fontFamily: 'Roboto', 
            fontSize: '14px', 
            fontWeight: 500, 
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ 
            display: 'inline-block', 
            width: '8px', 
            height: '8px', 
            backgroundColor: entry.color, 
            borderRadius: '50%', 
            marginRight: '5px', 
          }} />
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

CustomLegend.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

export default CustomLegend;
