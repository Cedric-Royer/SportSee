import React from 'react';
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import './PerformanceRadarChart.scss';

/**
 * Composant affichant un graphique radar de performance.
 *
 * @param {Object[]} performanceData - Données de performance à afficher dans le radar.
 * @param {string} performanceData[].kindName - Nom de la catégorie de performance (par exemple, "Cardio", "Force").
 * @param {number} performanceData[].value - Valeur associée à cette catégorie de performance.
 * @returns {JSX.Element} Le graphique radar de performance.
 */
const PerformanceRadarChart = ({ performanceData }) => {
  return (
    <div className="performance-radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={75} data={performanceData}>
          <PolarGrid radialLines={false} stroke="#FFFFFF" />
          <PolarAngleAxis
            dataKey="kindName"
            tick={{
              fill: '#FFFFFF',
              fontSize: 12,
              fontWeight: 500,
              fontFamily: 'Roboto',
            }}
          />
          <Radar name="Performance" dataKey="value" fill="#FF0101B2" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

PerformanceRadarChart.propTypes = {
  performanceData: PropTypes.arrayOf(
    PropTypes.shape({
      kindName: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PerformanceRadarChart;
