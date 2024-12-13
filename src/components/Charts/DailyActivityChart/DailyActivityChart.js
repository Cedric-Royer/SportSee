import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';
import './DailyActivityChart.scss';

/**
 * Composant affichant un graphique d'activité quotidienne.
 *
 * @param {Object[]} activityData - Données d'activité quotidienne.
 * @param {string|number} activityData[].day - Jour de l'activité.
 * @param {number} activityData[].kilogram - Poids (en kilogrammes) associé à l'activité.
 * @param {number} activityData[].calories - Calories brûlées pendant l'activité.
 * @returns {JSX.Element} Le graphique d'activité quotidienne.
 */
const DailyActivityChart = ({ activityData }) => {
  if (!activityData || activityData.length === 0) {
    return <div>Aucune donnée d'activité disponible.</div>;
  }

  return (
    <div className="daily-activity-chart">
      <span className="daily-activity-title">Activité quotidienne</span>
      <ResponsiveContainer width="100%" height="95%">
        <BarChart data={activityData} margin={{ left: 43, right: 20 }}>
          <CartesianGrid strokeDasharray="1 3" horizontal={true} vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            scale="point"
            padding={{ left: 10, right: 10 }}
            dy={10}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            dataKey="kilogram"
            domain={['dataMin - 1', 'dataMax + 1']}
            tickCount={4}
            axisLine={false}
            tickLine={false}
            dx={40}
          />
          <YAxis
            yAxisId="left"
            dataKey="calories"
            hide={true}
            domain={['dataMin - 50', 'dataMax + 50']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} verticalAlign="top" />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            name="Poids (kg)"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            name="Calories brûlées (kCal)"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

DailyActivityChart.propTypes = {
  activityData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DailyActivityChart;
