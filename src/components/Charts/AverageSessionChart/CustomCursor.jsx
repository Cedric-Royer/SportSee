import React from "react";
import PropTypes from "prop-types";

/**
 * Composant personnalisant le curseur pour un graphique.
 *
 * @function
 * @alias AverageSessionChart/CustomCursor
 * @param {Object} props - Les props du composant.
 * @param {Array} props.points - Les points de coordonnées pour le curseur.
 * @param {number} props.points[].x - La position x d'un point.
 * @param {number} props.width - La largeur du rectangle du curseur.
 * @param {number} props.height - La hauteur du rectangle du curseur.
 * @returns {JSX.Element|null} - Un rectangle représentant le curseur ou `null` si aucun point n'est fourni.
 */
const CustomCursor = ({ points, width, height }) => {
  if (!points) return null;
  const x = points[0].x;

  return (
    <rect
      x={x}
      y={0}
      width={width + 40}
      height={height + 130}
      fill="rgba(0, 0, 0, 0.2)"
    />
  );
};

CustomCursor.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
    })
  ),
  width: PropTypes.number,
  height: PropTypes.number,
};

export default CustomCursor;
